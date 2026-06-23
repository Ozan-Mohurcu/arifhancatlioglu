// ============================================================================
// Dil (i18n) yapılandırması
// ============================================================================
export const locales = ["tr", "en", "ko", "th", "ru", "ar", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

// İçerik (bio/blog) yalnızca bu dillerde tam; diğerleri buraya düşer
export const contentLocales = ["tr", "en"] as const;
export type ContentLocale = (typeof contentLocales)[number];

// Sağdan-sola yazılan diller
export const rtlLocales: Locale[] = ["ar"];

// Dil menüsünde gösterilecek isimler
export const localeNames: Record<Locale, { native: string; code: string }> = {
  tr: { native: "Türkçe", code: "TR" },
  en: { native: "English", code: "EN" },
  ko: { native: "한국어", code: "KO" },
  th: { native: "ไทย", code: "TH" },
  ru: { native: "Русский", code: "RU" },
  ar: { native: "العربية", code: "AR" },
  zh: { native: "中文", code: "ZH" },
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

// İçerik için: istenen dil tr/en değilse en'e düş
export function toContentLocale(locale: Locale): ContentLocale {
  return locale === "tr" ? "tr" : "en";
}

// Tarayıcı dilini desteklenen bir locale'e eşle
export function matchLocale(input: string | undefined | null): Locale {
  if (!input) return defaultLocale;
  const lower = input.toLowerCase();
  for (const l of locales) {
    if (lower === l || lower.startsWith(l + "-")) return l;
  }
  // bazı özel eşlemeler
  if (lower.startsWith("zh")) return "zh";
  return defaultLocale;
}
