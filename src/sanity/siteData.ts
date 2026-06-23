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
  "places": *[_type=="place"] | order(order asc){city, country, location, status},
  "supporters": *[_type=="supporter"] | order(order asc){name},
  "videos": *[_type=="video"] | order(order asc){platform, url}
}`;

type Raw = {
  settings?: {
    photo?: unknown; taglineTr?: string; taglineEn?: string; bioTr?: string; bioEn?: string;
    statCountries?: string; statYears?: string; statCities?: string;
  } | null;
  current?: { city?: string; country?: string; location?: { lat: number; lng: number }; noteTr?: string; noteEn?: string } | null;
  places?: { city: string; country: string; location?: { lat: number; lng: number }; status: string }[];
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

  // Yerler — harita konumu yoksa şehir adından otomatik bul
  const resolved = await Promise.all(
    (raw.places || []).map(async (p, i) => {
      const coords = p.location ?? (await geocode(p.city));
      if (!coords) return null;
      const gp: GeoPoint = { id: `s${i}`, city: p.city, country: p.country, lng: coords.lng, lat: coords.lat };
      return { gp, status: p.status };
    })
  );
  const ok = resolved.filter((r): r is { gp: GeoPoint; status: string } => r !== null);
  const sanityVisited = ok.filter((r) => r.status === "visited").map((r) => r.gp);
  const sanityUpcoming = ok.filter((r) => r.status === "upcoming").map((r) => r.gp);
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
