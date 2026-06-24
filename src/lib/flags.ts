// ============================================================================
// Ülke adından bayrak emojisi — otomatik (Arif elle yazmasın)
// ============================================================================

// Türkçe ülke adı (normalize) -> bayrak emojisi
const FLAGS: Record<string, string> = {
  turkiye: "🇹🇷",
  japonya: "🇯🇵",
  guneykore: "🇰🇷",
  kuzeykore: "🇰🇵",
  filipinler: "🇵🇭",
  vietnam: "🇻🇳",
  tayland: "🇹🇭",
  laos: "🇱🇦",
  kuveyt: "🇰🇼",
  umman: "🇴🇲",
  katar: "🇶🇦",
  bae: "🇦🇪",
  birlesikarapemirlikleri: "🇦🇪",
  suudiarabistan: "🇸🇦",
  makedonya: "🇲🇰",
  kuzeymakedonya: "🇲🇰",
  cin: "🇨🇳",
  gurcistan: "🇬🇪",
  hongkong: "🇭🇰",
  mogolistan: "🇲🇳",
  azerbaycan: "🇦🇿",
  singapur: "🇸🇬",
  kambocya: "🇰🇭",
  ermenistan: "🇦🇲",
  karadag: "🇲🇪",
  sirbistan: "🇷🇸",
  bosnahersek: "🇧🇦",
  arnavutluk: "🇦🇱",
  yunanistan: "🇬🇷",
  bulgaristan: "🇧🇬",
  italya: "🇮🇹",
  ispanya: "🇪🇸",
  fransa: "🇫🇷",
  almanya: "🇩🇪",
  hollanda: "🇳🇱",
  ingiltere: "🇬🇧",
  rusya: "🇷🇺",
  ukrayna: "🇺🇦",
  iran: "🇮🇷",
  irak: "🇮🇶",
  hindistan: "🇮🇳",
  pakistan: "🇵🇰",
  nepal: "🇳🇵",
  malezya: "🇲🇾",
  endonezya: "🇮🇩",
  tayvan: "🇹🇼",
  japon: "🇯🇵",
  misir: "🇪🇬",
  fas: "🇲🇦",
  tunus: "🇹🇳",
  abd: "🇺🇸",
  amerika: "🇺🇸",
  brezilya: "🇧🇷",
  ozbekistan: "🇺🇿",
  kazakistan: "🇰🇿",
  kirgizistan: "🇰🇬",
  tacikistan: "🇹🇯",
  turkmenistan: "🇹🇲",
};

// Ülke adını sadeleştir: baştaki emoji/boşlukları at, TR harfleri normalize et
function normalize(country: string): string {
  return country
    .replace(/^[^\p{L}]+/u, "") // baştaki emoji/boşluk/sembol
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replace(/[^a-z]/g, ""); // boşluk vb. at -> "hong kong" => "hongkong"
}

// Ülke adından bayrak (yoksa boş)
export function countryFlag(country: string): string {
  return FLAGS[normalize(country)] || "";
}

// Ülke adından baştaki bayrak/sembolleri temizle (elle yazılmışsa)
export function cleanCountry(country: string): string {
  return country.replace(/^[^\p{L}]+/u, "").trim();
}
