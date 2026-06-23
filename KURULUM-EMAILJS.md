# ✉️ EmailJS Kurulumu — İletişim Formu (Adım Adım)

İletişim formundan gelen mesajların doğrudan **arifhancatlioglu@gmail.com**'a düşmesi için.
~10 dakika, ücretsiz (ayda 200 mail). Kod bilmene gerek yok.

> Not: EmailJS bağlanmadan da form çalışır — buton ziyaretçinin mail uygulamasını açar.
> Otomatik mail istiyorsan bu rehberi izle.

---

## 1) Hesap aç
1. **https://www.emailjs.com** → **Sign Up** (Arif'in Gmail'iyle giriş yapabilirsin).
2. Mailini doğrula.

---

## 2) Mail servisini bağla (Email Service)
1. Sol menüden **"Email Services"** → **"Add New Service"**.
2. **Gmail**'i seç → **Connect Account** → Arif'in Gmail'iyle izin ver.
3. Oluşan **Service ID**'yi bir yere not et. (örn: `service_ab12cd`)

---

## 3) Mail şablonu oluştur (Email Template)
1. Sol menüden **"Email Templates"** → **"Create New Template"**.
2. Şablonun içeriğini şöyle ayarla (kopyala-yapıştır):

   **Subject (Konu):**
   ```
   Siteden yeni mesaj: {{from_name}}
   ```

   **Content (İçerik):**
   ```
   Gönderen: {{from_name}}
   E-posta: {{reply_to}}

   Mesaj:
   {{message}}
   ```

3. **"To Email"** alanına: `arifhancatlioglu@gmail.com`
4. Kaydet ve **Template ID**'yi not et. (örn: `template_xy34z`)

> Önemli: Şablonda kullandığımız alan adları **birebir** şöyle olmalı:
> `from_name`, `reply_to`, `message` (sitedeki form bunları gönderiyor).

---

## 4) Public Key'i al
1. Sol menüden **"Account"** → **"General"**.
2. **Public Key**'i kopyala. (örn: `aB1cD2eF3gH4iJ5`)

---

## 5) Değerleri siteye ekle
Proje kökündeki **`.env.local`** dosyasını aç ve şu 3 satırı doldur:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ab12cd
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xy34z
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aB1cD2eF3gH4iJ5
```

> Deploy ettiysen (Vercel), aynı 3 değeri Vercel → **Settings → Environment Variables**
> kısmına da ekle ve yeniden deploy et.

Kaydet, sunucuyu yeniden başlat. Artık form mesajları otomatik mail olarak düşer. 🎉

---

## Test
Siteyi aç → İletişim bölümünden kendine bir test mesajı gönder →
arifhancatlioglu@gmail.com gelen kutusunu kontrol et.
