// ============================================================================
// Kural tabanlı chatbot motoru — anahtar kelime eşleştirme + canlı konum
// ============================================================================
import { intents, fallback } from "@/data/chatbot";
import { currentLocation as defaultLocation } from "@/data/site";

// Türkçe karakterleri sadeleştir + küçült (eşleşme toleransı için)
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .trim();
}

function fill(template: string, loc: { city: string; country: string }): string {
  return template.replaceAll("{city}", loc.city).replaceAll("{country}", loc.country);
}

export function getBotReply(
  userText: string,
  current: { city: string; country: string } = defaultLocation
): string {
  const msg = normalize(userText);

  // En çok anahtar kelimesi eşleşen intent'i seç
  let best: { score: number; answer: string } | null = null;

  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (msg.includes(normalize(kw))) score += 1;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: intent.answer };
    }
  }

  return best ? fill(best.answer, current) : fallback;
}
