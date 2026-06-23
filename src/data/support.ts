// ============================================================================
// DESTEK / BAĞIŞ VERİSİ
// ----------------------------------------------------------------------------
// Shopier'de her kademeyi bir "ürün" olarak açacağız. Ürün linkini buraya
// yapıştır → buton otomatik çalışır. (Boşsa buton "yakında" görünür.)
// ============================================================================

export type SupportTier = {
  id: string;
  icon: "coffee" | "meal" | "hotel"; // ikon anahtarı (Icons.tsx)
  title: string;
  amount: string; // gösterim amaçlı
  description: string;
  shopierUrl: string; // Shopier ürün linki
  highlight?: boolean;
};

export const tiers: SupportTier[] = [
  {
    id: "coffee",
    icon: "coffee",
    title: "Kahve Ismarla",
    amount: "₺50",
    description: "Yoldaki kahve molama eşlik et.",
    shopierUrl: "", // örn: https://www.shopier.com/xxxxxx
  },
  {
    id: "meal",
    icon: "meal",
    title: "Yemek Desteği",
    amount: "₺150",
    description: "Bir öğün sıcak yemek demek.",
    shopierUrl: "",
    highlight: true,
  },
  {
    id: "hotel",
    icon: "hotel",
    title: "Konaklama Desteği",
    amount: "₺500",
    description: "Bir gecelik güvenli bir uyku.",
    shopierUrl: "",
  },
];

// ---------------------------------------------------------------------------
// DESTEK OLANLAR DUVARI
// ---------------------------------------------------------------------------
export const supporters: { name: string }[] = [
  { name: "Ozan M." },
  { name: "Mehmet Y." },
  { name: "Zeynep K." },
  { name: "Ahmet D." },
  { name: "Elif S." },
  { name: "Can T." },
];
