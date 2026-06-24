// ============================================================================
// SEED — Yereldeki tüm içeriği Sanity'ye aktarır (panel dolsun, Arif düzenlesin)
// ----------------------------------------------------------------------------
// Çalıştırma:
//   1) Sanity'de bir "Editor" API token oluştur (sanity.io/manage → API → Tokens)
//   2) .env.local dosyasına ekle:  SANITY_API_WRITE_TOKEN=sk...
//   3) npm run seed
//
// Tekrar çalıştırılabilir (createOrReplace ile aynı id'leri günceller, çoğaltmaz).
// ============================================================================
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "../src/sanity/env";
import { profile, currentLocation, visited, upcoming, stats } from "../src/data/site";
import { supporters } from "../src/data/support";
import { youtubeVideos, tiktokVideos } from "../src/data/content";
import { posts } from "../src/data/blog";
import { postsEn } from "../src/data/blog.en";

// .env.local içinden token oku (yoksa process.env)
function readToken(): string | undefined {
  if (process.env.SANITY_API_WRITE_TOKEN) return process.env.SANITY_API_WRITE_TOKEN;
  try {
    const txt = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    const line = txt.split(/\r?\n/).find((l) => l.startsWith("SANITY_API_WRITE_TOKEN="));
    return line?.split("=").slice(1).join("=").trim();
  } catch {
    return undefined;
  }
}

const token = readToken();
if (!token) {
  console.error("\n❌ SANITY_API_WRITE_TOKEN bulunamadı. .env.local'a ekleyip tekrar dene.\n");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const geo = (lat: number, lng: number) => ({ _type: "geopoint", lat, lng });
const stat = (k: string) => stats.find((s) => s.key === k)?.value || "";

async function main() {
  const docs: Record<string, unknown>[] = [];

  // Genel ayarlar
  docs.push({
    _id: "settings",
    _type: "settings",
    taglineTr: profile.tagline,
    taglineEn: profile.taglineEn,
    bioTr: profile.bio,
    bioEn: profile.bioEn,
    statCountries: stat("countries"),
    statYears: stat("years"),
    statCities: stat("cities"),
  });

  // Şu anki konum
  docs.push({
    _id: "currentLocation",
    _type: "currentLocation",
    city: currentLocation.city,
    country: currentLocation.country,
    location: geo(currentLocation.lat, currentLocation.lng),
    noteTr: currentLocation.note || "",
    noteEn: currentLocation.note || "",
  });

  // Yerler (gittiğim + gelecek)
  visited.forEach((p, i) => {
    docs.push({
      _id: `place.${p.id}`,
      _type: "place",
      city: p.city,
      country: p.country,
      location: geo(p.lat, p.lng),
      status: "visited",
      order: i,
    });
  });
  upcoming.forEach((p, i) => {
    docs.push({
      _id: `place.${p.id}`,
      _type: "place",
      city: p.city,
      country: p.country,
      location: geo(p.lat, p.lng),
      status: "upcoming",
      order: 100 + i,
    });
  });

  // Blog yazıları
  posts.forEach((p, i) => {
    const en = postsEn[p.id];
    docs.push({
      _id: `post.${p.id}`,
      _type: "post",
      titleTr: p.title,
      titleEn: en?.title || p.title,
      slug: { _type: "slug", current: p.id },
      country: p.country,
      city: p.city,
      date: p.date,
      excerptTr: p.excerpt,
      excerptEn: en?.excerpt || p.excerpt,
      bodyTr: p.paragraphs.join("\n\n"),
      bodyEn: (en?.paragraphs || p.paragraphs).join("\n\n"),
      order: i,
    });
  });

  // Destekçiler
  supporters.forEach((s, i) => {
    docs.push({ _id: `supporter.${i}`, _type: "supporter", name: s.name, order: i });
  });

  // Videolar
  youtubeVideos.forEach((id, i) => {
    docs.push({
      _id: `video.yt.${i}`,
      _type: "video",
      platform: "youtube",
      url: `https://www.youtube.com/watch?v=${id}`,
      order: i,
    });
  });
  tiktokVideos.forEach((url, i) => {
    docs.push({ _id: `video.tt.${i}`, _type: "video", platform: "tiktok", url, order: 100 + i });
  });

  console.log(`\n📦 ${docs.length} kayıt aktarılıyor...\n`);
  let tx = client.transaction();
  for (const d of docs) tx = tx.createOrReplace(d as never);
  await tx.commit();
  console.log(`✅ Bitti! ${docs.length} kayıt panele aktarıldı.\n`);
  console.log("Artık https://arifhancatlioglu.vercel.app/studio panelinde hepsini görüp düzenleyebilirsin.");
  console.log("⚠️ Güvenlik: kullandığın Editor token'ını sanity.io/manage'dan SİL (revoke).\n");
}

main().catch((e) => {
  console.error("Seed hatası:", e.message || e);
  process.exit(1);
});
