# 🚀 Yayına Alma (Deploy) — Vercel + Domain (Adım Adım)

Siteyi internete açmak için. Vercel **ücretsiz**, otomatik SSL (https) verir, çok hızlıdır.
İki yol var — **A yolu** (GitHub) önerilir.

---

## A YOLU — GitHub + Vercel (önerilen)

### 1) Kodu GitHub'a yükle
1. **https://github.com** → hesabın yoksa aç (senin mailinle).
2. Sağ üstten **New repository** → ad: `arif-yollarda` → **Private** seç → Create.
3. Bilgisayarda proje klasöründe (PowerShell), şu komutları sırayla çalıştır:
   ```bash
   git init
   git add .
   git commit -m "ilk surum"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADIN/arif-yollarda.git
   git push -u origin main
   ```
   > `KULLANICI_ADIN` yerine kendi GitHub kullanıcı adını yaz.

### 2) Vercel'e bağla
1. **https://vercel.com** → **Sign Up** → **Continue with GitHub** (GitHub hesabınla gir).
2. **Add New → Project** → `arif-yollarda` reposunu seç → **Import**.
3. Ayarlara dokunma (Next.js otomatik tanınır) → **Deploy**.
4. 1-2 dakika sonra `https://arif-yollarda.vercel.app` gibi bir adres hazır. 🎉

### 3) (Varsa) ortam değişkenleri
EmailJS'i kurduysan: Vercel → Projen → **Settings → Environment Variables** →
`NEXT_PUBLIC_EMAILJS_*` değerlerini ekle → **Redeploy**.

---

## B YOLU — Vercel CLI (GitHub'sız hızlı yol)
```bash
npm i -g vercel
vercel login
vercel --prod
```
Soruları varsayılan geç; birkaç dakikada yayınlanır.

---

## 🌐 Domain bağlama (arifhancatlioglu.com)

1. Domaini al (İsimtescil / GoDaddy / Namecheap). `arifhancatlioglu.com`
2. Vercel → Projen → **Settings → Domains → Add** → `arifhancatlioglu.com` yaz.
3. Vercel sana **DNS kayıtları** (A / CNAME) gösterir.
4. Domain sağlayıcının panelinde bu kayıtları gir.
5. Birkaç saat içinde domain siteye bağlanır, https otomatik gelir.

---

## 🔁 Güncelleme nasıl olur?
- **A yolu** kullandıysan: kodu değiştir → `git add . && git commit -m "guncelleme" && git push`
  → Vercel otomatik yeniden yayınlar.
- İçerik panelini (Sanity) kurunca, Arif değişiklikleri **kod olmadan** panelden yapacak;
  site anında güncellenecek.

---

## Sıra
Deploy bittikten sonra → **Faz 2: Sanity içerik paneli** (Arif konum/ülke/blog/foto eklesin).
Onun için ayrı rehber hazırlayacağım; tek ihtiyacım senden bir **Sanity proje ID'si** olacak.
