# 💳 Shopier Kurulumu — Bağış / Destek Sistemi (Adım Adım)

Bu rehberi takip et, ~15 dakikada bağış sistemi aktif olur. Hiçbir teknik bilgi gerekmez;
sonunda sadece **3 link** kopyalayıp bana vereceksin (ya da dosyaya yapıştıracaksın).

---

## 1) Hesap aç

1. **https://www.shopier.com** → sağ üstten **"Üye Ol / Mağaza Aç"**.
2. E-posta + şifre belirle. (İstersen Arif'in mailiyle aç — para onun hesabına gidecek.)
3. **Hesap türü:** "Bireysel" seçebilirsin (şirket şart değil).

### Sana soracağı bilgiler:
| Alan | Ne yazacaksın |
|------|----------------|
| **Mağaza / Dükkan adı** | `Arif Yollarda` |
| **Ad Soyad** | Arifhan Çatlıoğlu |
| **TC Kimlik No** | (zorunlu — kimlik doğrulama için) |
| **Telefon** | cep numarası |
| **IBAN** | Paranın yatacağı banka hesabı |

> IBAN ve kimlik, paranın güvenle hesaba geçmesi için. Shopier resmî/güvenli bir TR firmasıdır.

---

## 2) 3 destek ürünü oluştur

Panelde **"Ürün Ekle"** (veya "Yeni Ürün") butonuna bas ve şu 3 ürünü tek tek ekle:

### Ürün 1
- **Ürün adı:** `Kahve Ismarla`
- **Fiyat:** `50` TL
- **Ürün tipi:** Dijital / Hizmet (kargo KAPALI)
- **Açıklama:** `Arifhan'ın yolculuğuna bir kahve kadar destek ol.`

### Ürün 2
- **Ürün adı:** `Yemek Desteği`
- **Fiyat:** `150` TL
- **Ürün tipi:** Dijital / Hizmet
- **Açıklama:** `Yoldaki bir öğün sıcak yemeğe destek ol.`

### Ürün 3
- **Ürün adı:** `Konaklama Desteği`
- **Fiyat:** `500` TL
- **Ürün tipi:** Dijital / Hizmet
- **Açıklama:** `Güvenli bir gecelik konaklamaya destek ol.`

> İstersen ürünlere birer görsel de ekleyebilirsin (kahve, yemek, otel fotoğrafı). Zorunlu değil.

---

## 3) Ürün linklerini al

Her ürünü kaydettikten sonra ürünün **"Paylaş" / "Ürün Linki"** kısmından linkini kopyala.
Şuna benzer olacak:

```
https://www.shopier.com/12345678
```

3 link toplayacaksın (kahve, yemek, konaklama).

---

## 4) Linkleri siteye ekle

İki yol var:

**Kolay yol:** 3 linki bana gönder, ben yerleştireyim.

**Kendin yapmak istersen:** `src/data/support.ts` dosyasını aç. Her kademede
`shopierUrl: ""` kısmını bul ve linki tırnakların arasına yapıştır:

```ts
{
  id: "coffee",
  ...
  shopierUrl: "https://www.shopier.com/12345678",  // ← buraya
},
```

Kaydet. O an "Yakında" yazısı **"Destek Ol"** butonuna döner. 🎉

---

## Nasıl çalışır?
- Ziyaretçi butona basar → Shopier ödeme ekranı açılır → kartla öder.
- Para **haftalık** (genelde Çarşamba) IBAN'ına geçer.
- **Komisyon:** ~%5,99 + ₺0,49 (Shopier kesintisi).

> ⚠️ Düzenli ve yüksek tutarlı destek toplanacaksa vergi durumu için bir mali müşavire
> kısaca danışmak iyi olur.
