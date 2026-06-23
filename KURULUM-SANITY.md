# 🛠️ Sanity İçerik Paneli — Faz 2 (Adım Adım)

Amaç: Arif'in **kod bilmeden** panelden konum, ülke, blog yazısı, fotoğraf, destekçi vb.
ekleyip değiştirebilmesi. Bu rehberin **senin yapacağın kısmı sadece hesap açıp bir
"Proje ID'si" almak** — gerisini (panelin kodlanması, siteye bağlanması) ben yapacağım.

---

## SENİN YAPACAĞIN (5 dk)

### 1) Hesap aç
1. **https://www.sanity.io** → **Get started / Sign up**.
2. **Google ile giriş yap** → Arif'in mailiyle (`arifhancatlioglu@gmail.com`) gir.
   > Panele sonra Arif bu maille girecek; o yüzden onun mailiyle açmak mantıklı.

### 2) Proje oluştur
1. Giriş yapınca **"Create new project"**.
2. **Proje adı:** `Arif Yollarda`
3. **Dataset:** `production` (varsayılan, dokunma).

### 3) Bana 2 bilgi ver
Proje açılınca **Project Settings** (veya ana ekranda) şu bilgiler olur:
- **Project ID** (örn: `a1b2c3d4`)
- **Dataset** (genelde `production`)

Bu ikisini bana gönder. Hepsi bu! 🎉

---

## ✅ PANEL KURULDU — açmak için tek adım: CORS

Panel kodu hazır ve siteye gömüldü (`/studio`). Tarayıcıdan açılması için Sanity'ye
sitenin adresini "izinli" eklemen gerekiyor (1 dakika):

1. **https://www.sanity.io/manage** → projen **Arif Yollarda**'yı seç.
2. Üstten **API** sekmesi → **CORS origins** → **Add CORS origin**.
3. Şu adresleri tek tek ekle (her birinde **Allow credentials** işaretli olsun):
   - `https://arifhancatlioglu.vercel.app`
   - `http://localhost:3000`
   - (domain alınınca) `https://arifhancatlioglu.com`

### Panele giriş
- Tarayıcıdan **https://arifhancatlioglu.vercel.app/studio** adresine git.
- Sanity hesabınla (projeyi açtığın Google/mail) giriş yap.
- Soldaki menüden düzenle, sağ alttan **Publish** (Yayınla) → site ~30 saniyede güncellenir.

> İlk açtığında "Genel Ayarlar" ve "Şu Anki Konum" boş gelir; doldurup Publish dersen
> siteye yansır. Boş bıraktığın alanlar mevcut içerikle (yedek) çalışmaya devam eder.

---

## NELER PANELE BAĞLI (canlı)
- ✅ Şu anki konum (şehir + harita + not)
- ✅ Gittiğim/Gelecek yerler (ülke ekle/sil)
- ✅ Destekçiler
- ✅ Videolar (YouTube/TikTok linki)
- ✅ Profil fotoğrafı, Hakkımda (TR/EN), slogan, istatistikler
- ⏳ Blog yazıları: panelde alan var ama siteye bağlanması **bir sonraki adım**
  (şu an site 18 hazır ülke yazısıyla çalışıyor)

---

## (Eski not) BENİM YAPACAĞIM

- Sanity Studio panelini `arifhancatlioglu.com/studio` adresine kuracağım.
- Şu içerik tiplerini panele ekleyeceğim (Arif buradan düzenleyecek):
  - 📍 **Şu an neredeyim** (şehir + harita konumu)
  - 🗺️ **Gittiğim yerler** (ülke ekle/sil)
  - 🛣️ **Gelecek rota** (durak ekle)
  - ✍️ **Blog / Ülke notları** (başlık, yazı, fotoğraf yükleme)
  - 👤 **Hakkımda** metni
  - 💚 **Destek olanlar** listesi
  - 🎬 **Videolar** (YouTube/TikTok linki)
- Siteyi panele bağlayacağım: Arif bir şeyi değiştirip **"Yayınla"** deyince site anında güncellenecek.

---

## Panele giriş (kurulduktan sonra)
- Arif tarayıcıdan **arifhancatlioglu.com/studio** adresine girer.
- **Google ile** (kendi maili) tek tıkla giriş — şifre yok.
- Sadece yetkili mail girebilir; başkası giremez.

---

## Sıralama önerisi
1. Önce **Deploy** (site yayında olsun) — `KURULUM-DEPLOY.md`
2. Sonra **Sanity** (bu rehber) — panel devreye girsin
3. Arada **Shopier** ve **EmailJS** — `KURULUM-SHOPIER.md`, `KURULUM-EMAILJS.md`
