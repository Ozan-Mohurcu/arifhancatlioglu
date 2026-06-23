// ============================================================================
// SİTE VERİSİ — Arifhan Yolda
// ----------------------------------------------------------------------------
// Bu dosya geçici "içerik kaynağıdır". İleride Sanity paneline taşınacak ve
// Arifhan bunları panelden düzenleyecek. Şimdilik buradan kolayca değişir.
// ============================================================================

export type GeoPoint = {
  id: string;
  city: string;
  country: string;
  lng: number;
  lat: number;
  date?: string; // "2025-03" gibi
  note?: string; // kısa not / blog bağlantısı için
};

// ---------------------------------------------------------------------------
// PROFİL
// ---------------------------------------------------------------------------
export const profile = {
  name: "Arifhan Çatlıoğlu",
  brand: "Arif Yollarda",
  tagline: "Yeni yerler keşfetmek için yola çıktım — gelin beraber keşfedelim.",
  bio: `Merhabalar, adım Arifhan, 30 yaşındayım. Yaklaşık 10 senedir boş vakitlerimde
Türkiye'nin birçok yerini gezip keşfediyorum. Son 4 senedir yurt dışına açıldım;
artık keşfettiğim yerleri burada anı olarak paylaşacağım. Gelin beraber yeni yerler
keşfedelim.`,
  // Marker ve "hakkında" için yuvarlak profil fotoğrafı.
  // /public/arifhan.jpg dosyasını koy; yoksa baş harfi gösterilir.
  photo: "/arifhan.png",
  email: "arifhancatlioglu@gmail.com",
};

// ---------------------------------------------------------------------------
// SOSYAL HESAPLAR
// ---------------------------------------------------------------------------
export const socials = {
  youtube: "https://www.youtube.com/@ArifhanCatlioglu",
  tiktok: "https://www.tiktok.com/@arifyollardaa",
  instagram: "https://www.instagram.com/arifhan.catli/",
};

// ---------------------------------------------------------------------------
// ŞİMDİKİ KONUM  → Arifhan panelden buranı değiştirecek
// ---------------------------------------------------------------------------
export const currentLocation: GeoPoint = {
  id: "now",
  city: "Giresun",
  country: "Türkiye",
  lng: 38.3895,
  lat: 40.9128,
  note: "",
};

// ---------------------------------------------------------------------------
// GİTTİĞİ YERLER (ülke + temsili şehir)
// ---------------------------------------------------------------------------
export const visited: GeoPoint[] = [
  { id: "v1", city: "Tokyo", country: "Japonya", lng: 139.6917, lat: 35.6895 },
  { id: "v2", city: "Seul", country: "Güney Kore", lng: 126.978, lat: 37.5665 },
  { id: "v3", city: "Manila", country: "Filipinler", lng: 120.9842, lat: 14.5995 },
  { id: "v4", city: "Hanoi", country: "Vietnam", lng: 105.8342, lat: 21.0278 },
  { id: "v5", city: "Bangkok", country: "Tayland", lng: 100.5018, lat: 13.7563 },
  { id: "v6", city: "Vientiane", country: "Laos", lng: 102.6, lat: 17.9757 },
  { id: "v7", city: "Kuveyt", country: "Kuveyt", lng: 47.9774, lat: 29.3759 },
  { id: "v8", city: "Maskat", country: "Umman", lng: 58.5876, lat: 23.5859 },
  { id: "v9", city: "Üsküp", country: "Makedonya", lng: 21.4254, lat: 41.9981 },
  { id: "v10", city: "Pekin", country: "Çin", lng: 116.4074, lat: 39.9042 },
  { id: "v11", city: "Tiflis", country: "Gürcistan", lng: 44.7833, lat: 41.7151 },
  { id: "v12", city: "Hong Kong", country: "Hong Kong", lng: 114.1694, lat: 22.3193 },
  { id: "v13", city: "Ulan Batur", country: "Moğolistan", lng: 106.9177, lat: 47.8864 },
  { id: "v14", city: "Bakü", country: "Azerbaycan", lng: 49.8671, lat: 40.4093 },
  { id: "v15", city: "Singapur", country: "Singapur", lng: 103.8198, lat: 1.3521 },
  { id: "v16", city: "Phnom Penh", country: "Kamboçya", lng: 104.916, lat: 11.5564 },
  { id: "v17", city: "Erivan", country: "Ermenistan", lng: 44.5152, lat: 40.1792 },
  { id: "v18", city: "Podgorica", country: "Karadağ", lng: 19.2594, lat: 42.4304 },
];

// ---------------------------------------------------------------------------
// GELECEK ROTA — ilk etapta kapalı. İleride durak eklemek istersen
// buraya { id, city, country, lng, lat } ekle; harita/çizelge otomatik gösterir.
// ---------------------------------------------------------------------------
export const upcoming: GeoPoint[] = [];

// ---------------------------------------------------------------------------
// İSTATİSTİKLER (hero için)
// ---------------------------------------------------------------------------
export const stats = [
  { label: "Ülke", value: "20+" },
  { label: "Yıl", value: "10+" },
  { label: "Şehir", value: "40+" },
];
