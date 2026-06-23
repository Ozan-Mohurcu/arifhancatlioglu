// ============================================================================
// Blog verisi — Sanity post'ları + yerel 18 yazı (yedek), birleşik.
// Sunucu tarafında çağrılır.
// ============================================================================
import { sanityClient, urlForImage } from "./client";
import { posts as localPosts, getPhotos } from "@/data/blog";
import { postsEn } from "@/data/blog.en";

export type ViewPost = {
  id: string; // slug
  country: string;
  city: string;
  date: string;
  title: { tr: string; en: string };
  excerpt: { tr: string; en: string };
  paragraphs: { tr: string[]; en: string[] };
  photos: string[];
};

export type PostPreview = {
  id: string;
  country: string;
  title: { tr: string; en: string };
  excerpt: { tr: string; en: string };
  cover: string;
};

function splitParas(text?: string): string[] {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Yerel yazıyı ViewPost'a çevir
function localToView(p: (typeof localPosts)[number]): ViewPost {
  const en = postsEn[p.id];
  return {
    id: p.id,
    country: p.country,
    city: p.city,
    date: p.date,
    title: { tr: p.title, en: en?.title || p.title },
    excerpt: { tr: p.excerpt, en: en?.excerpt || p.excerpt },
    paragraphs: { tr: p.paragraphs, en: en?.paragraphs || p.paragraphs },
    photos: getPhotos(p),
  };
}

type SanityPost = {
  id?: string;
  titleTr?: string;
  titleEn?: string;
  country?: string;
  city?: string;
  date?: string;
  excerptTr?: string;
  excerptEn?: string;
  bodyTr?: string;
  bodyEn?: string;
  images?: unknown[];
};

function sanityToView(d: SanityPost): ViewPost {
  const photos = (d.images || [])
    .map((img) => urlForImage(img))
    .filter((u): u is string => Boolean(u));
  const fallbackPhoto = `https://loremflickr.com/800/600/${encodeURIComponent(d.country || "travel")}`;
  return {
    id: d.id || "",
    country: d.country || "",
    city: d.city || "",
    date: d.date || "",
    title: { tr: d.titleTr || "", en: d.titleEn || d.titleTr || "" },
    excerpt: { tr: d.excerptTr || "", en: d.excerptEn || d.excerptTr || "" },
    paragraphs: { tr: splitParas(d.bodyTr), en: splitParas(d.bodyEn || d.bodyTr) },
    photos: photos.length > 0 ? photos : [fallbackPhoto],
  };
}

const SANITY_POSTS = `*[_type=="post" && defined(slug.current)] | order(order asc, _createdAt desc){
  "id": slug.current, titleTr, titleEn, country, city, date, excerptTr, excerptEn, bodyTr, bodyEn, images
}`;

// Tüm yazılar: Sanity önce, sonra yerel (aynı id varsa Sanity kazanır)
export async function getPosts(): Promise<ViewPost[]> {
  let sanity: ViewPost[] = [];
  try {
    const docs = await sanityClient.fetch<SanityPost[]>(SANITY_POSTS, {}, { next: { revalidate: 30 } });
    sanity = (docs || []).filter((d) => d.id).map(sanityToView);
  } catch {
    sanity = [];
  }
  const ids = new Set(sanity.map((p) => p.id));
  const locals = localPosts.map(localToView).filter((p) => !ids.has(p.id));
  return [...sanity, ...locals];
}

export async function getPostBySlug(slug: string): Promise<ViewPost | null> {
  const all = await getPosts();
  return all.find((p) => p.id === slug) || null;
}

function toPreview(p: ViewPost): PostPreview {
  return { id: p.id, country: p.country, title: p.title, excerpt: p.excerpt, cover: p.photos[0] || "" };
}

// Yerel (yedek) önizlemeler — Sanity'siz, senkron
export function localPostPreviews(): PostPreview[] {
  return localPosts.map(localToView).map(toPreview);
}

// Ana sayfa için hafif önizleme (paragrafsız)
export async function getPostPreviews(): Promise<PostPreview[]> {
  const all = await getPosts();
  return all.map(toPreview);
}
