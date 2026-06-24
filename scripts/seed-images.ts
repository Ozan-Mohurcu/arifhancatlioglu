// ============================================================================
// SEED IMAGES — Blog yazılarının fotoğraflarını Sanity'ye yükler
// ----------------------------------------------------------------------------
// Mevcut (geçici/stok) ülke görsellerini her yazının "Fotoğraflar" alanına
// yükler ki panelde başlangıç galerisi olsun. Arif bunları silip kendi
// fotoğraflarını yükleyebilir, sırasını değiştirebilir.
//
// Çalıştırma:
//   1) Sanity'de "Editor" API token oluştur
//   2) .env.local'a:  SANITY_API_WRITE_TOKEN=sk...
//   3) npm run seed:images
// ============================================================================
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Buffer } from "node:buffer";
import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "../src/sanity/env";
import { posts, getPhotos } from "../src/data/blog";

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

async function uploadImage(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`indirilemedi: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buf, { filename });
  return asset._id;
}

async function main() {
  console.log(`\n🖼️  ${posts.length} yazının fotoğrafları yükleniyor...\n`);
  let done = 0;

  for (const post of posts) {
    const urls = getPhotos(post);
    const images: Record<string, unknown>[] = [];
    for (let i = 0; i < urls.length; i++) {
      try {
        const ref = await uploadImage(urls[i], `${post.id}-${i + 1}.jpg`);
        images.push({ _type: "image", _key: `img${i}`, asset: { _type: "reference", _ref: ref } });
      } catch (e) {
        console.warn(`  ⚠️ ${post.id} foto ${i + 1} atlandı: ${(e as Error).message}`);
      }
    }
    if (images.length > 0) {
      await client.patch(`post.${post.id}`).set({ images }).commit();
      done++;
      console.log(`  ✅ ${post.country} (${images.length} foto)`);
    }
  }

  console.log(`\n✅ Bitti! ${done} yazıya foto eklendi. Panelde 'Fotoğraflar' alanında görünür.`);
  console.log("⚠️ Güvenlik: kullandığın Editor token'ını sanity.io/manage'dan SİL.\n");
}

main().catch((e) => {
  console.error("Hata:", e.message || e);
  process.exit(1);
});
