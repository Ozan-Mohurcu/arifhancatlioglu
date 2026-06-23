import { defineType, defineField } from "sanity";

// ============================================================================
// İçerik şemaları — Arifhan bunları panelden düzenleyecek
// (Türkçe etiketler, sade alanlar)
// ============================================================================

// --- Genel ayarlar (tek kayıt) ---
const settings = defineType({
  name: "settings",
  title: "Genel Ayarlar",
  type: "document",
  fields: [
    defineField({ name: "photo", title: "Profil fotoğrafı", type: "image", options: { hotspot: true } }),
    defineField({ name: "taglineTr", title: "Slogan (Türkçe)", type: "string" }),
    defineField({ name: "taglineEn", title: "Slogan (İngilizce)", type: "string" }),
    defineField({ name: "bioTr", title: "Hakkımda (Türkçe)", type: "text", rows: 5 }),
    defineField({ name: "bioEn", title: "Hakkımda (İngilizce)", type: "text", rows: 5 }),
    defineField({ name: "statCountries", title: "İstatistik · Ülke", type: "string" }),
    defineField({ name: "statYears", title: "İstatistik · Yıl", type: "string" }),
    defineField({ name: "statCities", title: "İstatistik · Şehir", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Genel Ayarlar" }) },
});

// --- Şu anki konum (tek kayıt) ---
const currentLocation = defineType({
  name: "currentLocation",
  title: "Şu Anki Konum",
  type: "document",
  fields: [
    defineField({ name: "city", title: "Şehir", type: "string", validation: (r) => r.required() }),
    defineField({ name: "country", title: "Ülke", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Harita konumu", type: "geopoint" }),
    defineField({ name: "noteTr", title: "Kısa not (TR)", type: "string" }),
    defineField({ name: "noteEn", title: "Kısa not (EN)", type: "string" }),
  ],
  preview: {
    select: { city: "city", country: "country" },
    prepare: ({ city, country }) => ({ title: `Şu an: ${city || "?"}, ${country || ""}` }),
  },
});

// --- Gittiğim / Gelecek yerler ---
const place = defineType({
  name: "place",
  title: "Yer (Gittiğim / Gelecek)",
  type: "document",
  fields: [
    defineField({ name: "city", title: "Şehir", type: "string", validation: (r) => r.required() }),
    defineField({ name: "country", title: "Ülke", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Harita konumu", type: "geopoint", validation: (r) => r.required() }),
    defineField({
      name: "status",
      title: "Durum",
      type: "string",
      options: { list: [
        { title: "Gittim", value: "visited" },
        { title: "Gelecek durak", value: "upcoming" },
      ], layout: "radio" },
      initialValue: "visited",
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Sıra", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { city: "city", country: "country", status: "status" },
    prepare: ({ city, country, status }) => ({
      title: `${city}, ${country}`,
      subtitle: status === "upcoming" ? "Gelecek durak" : "Gittim",
    }),
  },
});

// --- Blog / Ülke notu ---
const post = defineType({
  name: "post",
  title: "Blog / Ülke Notu",
  type: "document",
  fields: [
    defineField({ name: "titleTr", title: "Başlık (TR)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "titleEn", title: "Başlık (EN)", type: "string" }),
    defineField({ name: "slug", title: "URL (slug)", type: "slug", options: { source: "titleTr" }, validation: (r) => r.required() }),
    defineField({ name: "country", title: "Ülke", type: "string" }),
    defineField({ name: "city", title: "Şehir", type: "string" }),
    defineField({ name: "date", title: "Tarih", type: "string", description: "örn: 2025-03" }),
    defineField({ name: "excerptTr", title: "Özet (TR)", type: "text", rows: 2 }),
    defineField({ name: "excerptEn", title: "Özet (EN)", type: "text", rows: 2 }),
    defineField({ name: "bodyTr", title: "Yazı (TR)", type: "text", rows: 8, description: "Paragrafları boş satırla ayır." }),
    defineField({ name: "bodyEn", title: "Yazı (EN)", type: "text", rows: 8, description: "Paragrafları boş satırla ayır." }),
    defineField({ name: "images", title: "Fotoğraflar", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "order", title: "Sıra", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "titleTr", subtitle: "country" } },
});

// --- Destekçi ---
const supporter = defineType({
  name: "supporter",
  title: "Destekçi",
  type: "document",
  fields: [
    defineField({ name: "name", title: "İsim", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Sıra", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "name" } },
});

// --- Video (YouTube / TikTok) ---
const video = defineType({
  name: "video",
  title: "Video (YouTube / TikTok)",
  type: "document",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: { list: [
        { title: "YouTube", value: "youtube" },
        { title: "TikTok", value: "tiktok" },
      ], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "url", title: "Video linki", type: "url", validation: (r) => r.required(), description: "YouTube/TikTok video bağlantısını yapıştır" }),
    defineField({ name: "order", title: "Sıra", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "platform", subtitle: "url" } },
});

export const schemaTypes = [settings, currentLocation, place, post, supporter, video];
