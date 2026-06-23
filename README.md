# 🧭 Arif Yollarda — Arifhan Çatlıoğlu

Canlı haritalı, animasyonlu, chatbot'lu gezgin tanıtım sitesi.
Next.js + Tailwind + Framer Motion + Mapbox GL ile yapıldı.

---

## 🚀 Hızlı Başlangıç

```bash
npm install
npm run dev
```

Sonra tarayıcıda **http://localhost:3000** aç.

> İlk açılışta harita "anahtar bekliyor" der — aşağıdaki Mapbox adımını yap.

---

## 🗺️ 1) Mapbox token (ÜCRETSİZ — harita için şart)

1. https://account.mapbox.com/ adresinden ücretsiz hesap aç.
2. "Tokens" sayfasından **Default public token**'ı kopyala (`pk.` ile başlar).
3. Proje kökünde `.env.local` adında dosya oluştur (`.env.local.example`'ı kopyalayabilirsin) ve şunu yaz:

```
NEXT_PUBLIC_MAPBOX_TOKEN=pk.SENIN_TOKENIN
```

4. `npm run dev`'i durdurup tekrar başlat. Harita artık çalışır. 🌍

> Ayda 50.000 harita gösterimine kadar tamamen ücretsiz.

---

## ✍️ 2) İçeriği düzenlemek (şimdilik dosyadan, ileride panel)

Tüm içerik `src/data/` klasöründe, sade dosyalarda:

| Dosya | Ne için |
|-------|---------|
| `site.ts` | **Şimdiki konum**, gittiği yerler, gelecek rota, bio, istatistikler |
| `support.ts` | Bağış kademeleri (Shopier linki), IBAN, **destek olanlar** listesi |
| `blog.ts` | Ülke yazıları |
| `content.ts` | YouTube video ID'leri, Instagram gönderi linkleri |
| `chatbot.ts` | Chatbot soru-cevapları |

### Şimdiki konumu değiştirmek
`src/data/site.ts` → `currentLocation` → şehir, ülke ve koordinatları değiştir.
Harita marker'ı ve chatbot otomatik güncellenir.

> Koordinat bulmak için: Google Maps'te yere sağ tıkla → çıkan sayılar (enlem, boylam).
> Bizim sıramız `lng` (boylam) sonra `lat` (enlem).

---

## 💚 3) Bağış (Shopier) kurulumu

1. https://www.shopier.com/ üzerinden satıcı hesabı aç.
2. Her destek kademesi için bir **ürün** oluştur:
   - ☕ Kahve Ismarla — ₺50
   - 🍽️ Yemek Desteği — ₺150
   - 🏨 Konaklama Desteği — ₺500
3. Her ürünün **paylaşım linkini** kopyala.
4. `src/data/support.ts` → ilgili kademenin `shopierUrl` alanına yapıştır.

IBAN için: aynı dosyada `iban` bölümüne gerçek IBAN'ı yaz.
Destek olanlar için: `supporters` listesine isim ekle.

> ⚠️ Düzenli/yüksek bağışta vergi durumu için bir mali müşavire kısaca danışmanı öneririz.

---

## ✉️ 4) İletişim formu (EmailJS) kurulumu

EmailJS bağlanmazsa form, ziyaretçinin e-posta uygulamasını açar (yine çalışır).
Otomatik mail için:

1. https://www.emailjs.com/ ücretsiz hesap aç, Gmail'i (`arifhancatlioglu@gmail.com`) bağla.
2. Bir **Service** ve **Template** oluştur (şablonda `from_name`, `reply_to`, `message` alanlarını kullan).
3. `.env.local`'a ekle:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

---

## 🎬 5) Video / gönderi eklemek

`src/data/content.ts`:
- **YouTube:** video linkindeki `v=ABC123` kısmındaki `ABC123`'ü `youtubeVideos` listesine ekle.
- **Instagram:** gönderi linkini (`https://www.instagram.com/p/XXXX/`) `instagramPosts` listesine ekle.

---

## 🖼️ 6) Profil fotoğrafı

`public/arifhan.jpg` olarak bir fotoğraf koy. Harita marker'ında, "Hakkında" ve chatbot'ta otomatik kullanılır. (Yoksa baş harf/ikon gösterilir.)

---

## 🌐 7) Yayına alma (Vercel + domain)

1. Projeyi GitHub'a yükle.
2. https://vercel.com → "Import Project" → repoyu seç.
3. **Environment Variables** kısmına `.env.local`'daki değerleri ekle.
4. Deploy. Otomatik `*.vercel.app` adresi gelir.
5. **Domain** (`arifhancatlioglu.com`): Vercel → Settings → Domains → ekle, yönlendirme talimatını domain sağlayıcında uygula.

---

## 📦 Komutlar

```bash
npm run dev      # geliştirme (localhost:3000)
npm run build    # üretim derlemesi
npm run start    # üretim sunucusu
```

---

## 🛣️ Yol Haritası (sonraki fazlar)

- **Sanity admin paneli** → Arifhan içerikleri koddan değil panelden düzenlesin
- **Otomatik konum (v2)** → telefondan canlı GPS (OwnTracks/Traccar), gizlilik filtreli
- **Zeki chatbot (v2)** → video içeriklerinden cevap (RAG)
- **Affiliate / indirim** bölümü
- **Blog** sayfaları ve haritadan yazıya bağlantı

---

Made with 🧭 for Arifhan.
