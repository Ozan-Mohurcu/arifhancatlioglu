// ============================================================================
// Site verisi — Sanity'den çeker, boş/erişilemezse yerel içeriğe düşer.
// Sunucu tarafında çağrılır (server component).
// ============================================================================
import { sanityClient, urlForImage } from "./client";
import {
  profile as localProfile,
  stats as localStats,
  currentLocation as localCurrent,
  visited as localVisited,
  upcoming as localUpcoming,
  type GeoPoint,
} from "@/data/site";
import { supporters as localSupporters } from "@/data/support";
import { youtubeVideos as localYt, tiktokVideos as localTt } from "@/data/content";
import { getPostPreviews, localPostPreviews, type PostPreview } from "./blogData";

export type SiteData = {
  profile: { photo: string; bioTr: string; bioEn: string; taglineTr: string; taglineEn: string };
  stats: { key: "countries" | "years" | "cities"; value: string }[];
  currentLocation: GeoPoint & { noteTr?: string; noteEn?: string };
  visited: GeoPoint[];
  upcoming: GeoPoint[];
  supporters: { name: string }[];
  youtubeVideos: string[];
  tiktokVideos: string[];
  posts: PostPreview[];
};

// Yerel (yedek) veri
function localData(): SiteData {
  return {
    profile: {
      photo: localProfile.photo,
      bioTr: localProfile.bio,
      bioEn: localProfile.bioEn,
      taglineTr: localProfile.tagline,
      taglineEn: localProfile.taglineEn,
    },
    stats: localStats,
    currentLocation: { ...localCurrent, noteTr: localCurrent.note, noteEn: localCurrent.note },
    visited: localVisited,
    upcoming: localUpcoming,
    supporters: localSupporters,
    youtubeVideos: localYt,
    tiktokVideos: localTt,
    posts: localPostPreviews(),
  };
}

function ytId(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : url;
}

// Şehir adından koordinat bul (ücretsiz, anahtarsız — Open-Meteo)
async function geocode(city: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const q = encodeURIComponent(city.trim());
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=1&language=tr&format=json`,
      { next: { revalidate: 86400 } }
    );
    const j = await res.json();
    const r = j?.results?.[0];
    if (r && typeof r.latitude === "number") return { lat: r.latitude, lng: r.longitude };
  } catch {
    /* yoksay */
  }
  return null;
}

const QUERY = `{
  "settings": *[_type=="settings"][0]{photo, taglineTr, taglineEn, bioTr, bioEn, statCountries, statYears, statCities},
  "current": *[_type=="currentLocation"][0]{city, country, location, noteTr, noteEn},
  "places": *[_type=="place"] | order(order asc){country, city, cities, location, status},
  "supporters": *[_type=="supporter"] | order(order asc){name},
  "videos": *[_type=="video"] | order(order asc){platform, url}
}`;

type Raw = {
  settings?: {
    photo?: unknown; taglineTr?: string; taglineEn?: string; bioTr?: string; bioEn?: string;
    statCountries?: string; statYears?: string; statCities?: string;
  } | null;
  current?: { city?: string; country?: string; location?: { lat: number; lng: number }; noteTr?: string; noteEn?: string } | null;
  places?: {
    country: string;
    city?: string; // eski yapı (tek şehir)
    cities?: string[]; // yeni yapı (çoklu şehir)
    location?: { lat: number; lng: number };
    status: string;
  }[];
  supporters?: { name: string }[];
  videos?: { platform: string; url: string }[];
};

export async function getSiteData(): Promise<SiteData> {
  const fb = localData();
  let raw: Raw;
  try {
    raw = await sanityClient.fetch<Raw>(QUERY, {}, { next: { revalidate: 30 } });
  } catch {
    return fb; // Sanity erişilemezse tamamen yerel
  }

  // Profil / ayarlar
  const s = raw.settings;
  const photo: string = (s?.photo ? urlForImage(s.photo) : null) || fb.profile.photo;
  const profile = {
    photo,
    bioTr: s?.bioTr || fb.profile.bioTr,
    bioEn: s?.bioEn || fb.profile.bioEn,
    taglineTr: s?.taglineTr || fb.profile.taglineTr,
    taglineEn: s?.taglineEn || fb.profile.taglineEn,
  };
  const stats: SiteData["stats"] = [
    { key: "countries", value: s?.statCountries || fb.stats[0].value },
    { key: "years", value: s?.statYears || fb.stats[1].value },
    { key: "cities", value: s?.statCities || fb.stats[2].value },
  ];

  // Şu anki konum — harita konumu yoksa şehir adından otomatik bul
  const c = raw.current;
  let currentLocation: SiteData["currentLocation"] = fb.currentLocation;
  if (c && c.city) {
    const coords = c.location ?? (await geocode(c.city));
    if (coords) {
      currentLocation = {
        id: "now", city: c.city, country: c.country || "", lng: coords.lng, lat: coords.lat,
        noteTr: c.noteTr, noteEn: c.noteEn,
      };
    }
  }

  // Yerler — bir ülke, içinde birden çok şehir; her şehir adından koordinat bulunur
  const resolvedGroups = await Promise.all(
    (raw.places || []).map(async (p, di) => {
      const cityList = p.cities && p.cities.length > 0 ? p.cities : p.city ? [p.city] : [];
      const gps = await Promise.all(
        cityList.map(async (city, ci) => {
          const coords = await geocode(city);
          return coords
            ? ({ id: `s${di}_${ci}`, city, country: p.country, lng: coords.lng, lat: coords.lat } as GeoPoint)
            : null;
        })
      );
      return { gps: gps.filter((g): g is GeoPoint => g !== null), status: p.status };
    })
  );
  const sanityVisited = resolvedGroups.filter((g) => g.status === "visited").flatMap((g) => g.gps);
  const sanityUpcoming = resolvedGroups.filter((g) => g.status === "upcoming").flatMap((g) => g.gps);
  const visited = sanityVisited.length > 0 ? sanityVisited : fb.visited;
  const upcoming = sanityUpcoming.length > 0 ? sanityUpcoming : fb.upcoming;

  // Destekçiler
  const supporters = raw.supporters && raw.supporters.length > 0 ? raw.supporters : fb.supporters;

  // Videolar
  const vids = raw.videos || [];
  const yt = vids.filter((v) => v.platform === "youtube").map((v) => ytId(v.url));
  const tt = vids.filter((v) => v.platform === "tiktok").map((v) => v.url);
  const youtubeVideos = yt.length > 0 ? yt : fb.youtubeVideos;
  const tiktokVideos = tt.length > 0 ? tt : fb.tiktokVideos;

  // Blog önizlemeleri (Sanity + yerel birleşik)
  let posts = fb.posts;
  try {
    posts = await getPostPreviews();
  } catch {
    posts = fb.posts;
  }

  return { profile, stats, currentLocation, visited, upcoming, supporters, youtubeVideos, tiktokVideos, posts };
}
