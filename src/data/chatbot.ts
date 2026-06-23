// ============================================================================
// KURAL TABANLI CHATBOT — bilgi tabanı
// ----------------------------------------------------------------------------
// Anahtar kelime eşleştirmeli, ücretsiz, API gerektirmez.
// Canlı konum site verisinden otomatik çekilir (chatbot/engine.ts).
// ============================================================================

export type Intent = {
  id: string;
  // küçük harfe çevrilmiş anahtar kelimeler — biri geçerse eşleşir
  keywords: string[];
  // {city} ve {country} otomatik doldurulur
  answer: string;
  // hızlı öneri butonu olarak göster
  suggest?: string;
};

export const intents: Intent[] = [
  {
    id: "location",
    keywords: ["nerede", "neredesin", "konum", "şu an", "suan", "hangi şehir", "where"],
    answer: "Arifhan şu an **{city}, {country}** şehrinde. Haritadan canlı konumu takip edebilirsin.",
    suggest: "Şu an nerede?",
  },
  {
    id: "next",
    keywords: ["nereye", "sonraki", "gelecek", "rota", "plan", "next"],
    answer: "Yeni rotasını yakında paylaşacak. Şimdilik gittiği yerleri ve canlı konumunu haritadan görebilirsin.",
    suggest: "Sırada ne var?",
  },
  {
    id: "support",
    keywords: ["destek", "bağış", "para", "yardım", "nasıl destek", "donate", "kahve", "yemek"],
    answer: "Çok teşekkürler. 'Destek Ol' bölümünden kahve, yemek ya da konaklama desteği olabilirsin.",
    suggest: "Nasıl destek olabilirim?",
  },
  {
    id: "who",
    keywords: ["kim", "kimsin", "hakkında", "tanı", "who"],
    answer: "Arifhan Çatlıoğlu — 10 yıldır gezip keşfeden, son 4 yıldır yurt dışını anlatan bir gezgin. Detaylar 'Hakkında' bölümünde.",
    suggest: "Arifhan kim?",
  },
  {
    id: "countries",
    keywords: ["kaç ülke", "kac ulke", "kaç şehir", "nereler", "gittiği", "gezdiği"],
    answer: "20'den fazla ülke — Japonya, Güney Kore, Çin, Vietnam, Tayland, Singapur, Moğolistan, Gürcistan ve daha fazlası. Haritadaki yeşil noktalar gittiği yerler.",
    suggest: "Nereleri gezdi?",
  },
  {
    id: "social",
    keywords: ["youtube", "instagram", "tiktok", "video", "takip", "sosyal", "izle"],
    answer: "YouTube, Instagram ve TikTok'ta paylaşıyor. Sayfanın altındaki bağlantılardan takip edebilirsin.",
    suggest: "Videolarını nerede izlerim?",
  },
  {
    id: "contact",
    keywords: ["iletişim", "ulaş", "mail", "eposta", "e-posta", "iş birliği", "sponsor"],
    answer: "İletişim bölümündeki formu doldur, doğrudan Arifhan'a ulaşır. İş birliği teklifleri de oradan.",
    suggest: "Nasıl iletişime geçerim?",
  },
  {
    id: "thanks",
    keywords: ["teşekkür", "sağol", "sagol", "thanks", "eyvallah"],
    answer: "Ne demek, iyi yolculuklar — yolda görüşürüz.",
  },
  {
    id: "greeting",
    keywords: ["merhaba", "selam", "hey", "naber", "günaydın", "iyi günler", "hello", "hi"],
    answer: "Merhaba. Şu an nerede olduğunu, rotasını ya da nasıl destek olabileceğini sorabilirsin.",
  },
];

// Eşleşme bulunamazsa
export const fallback =
  "Bunu tam anlayamadım. Şunları sorabilirsin: \"şu an nerede?\", \"nereye gidiyor?\", \"nasıl destek olabilirim?\"";

// Açılış mesajı
export const greeting =
  "Merhaba, ben Arif'in yol arkadaşı. Sana nasıl yardımcı olabilirim?";

// Başlangıçta gösterilecek hızlı sorular
export const quickReplies = [
  "Şu an nerede?",
  "Sırada nereye gidiyor?",
  "Nasıl destek olabilirim?",
  "Arifhan kim?",
];
