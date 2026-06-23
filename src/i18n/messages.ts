// ============================================================================
// Arayüz çevirileri — 7 dil
// İçerik (bio/blog) ayrı yönetilir; burada sabit arayüz metinleri var.
// ============================================================================
import type { Locale } from "./config";

export type Messages = {
  nav: { journey: string; about: string; support: string; content: string; blog: string; contact: string };
  hero: { onTheRoad: string; ctaSupport: string; ctaStory: string };
  stats: { countries: string; years: string; cities: string };
  legend: { visited: string; upcoming: string; current: string };
  about: { eyebrow: string; heading: string; ctaContent: string; ctaSupport: string; badge: string };
  journey: { eyebrow: string; title: string; desc: string; showAll: string; hide: string; done: string; now: string; next: string };
  support: {
    eyebrow: string; title: string; desc: string; donate: string; soon: string; popular: string; wall: string;
    coffeeT: string; coffeeD: string; mealT: string; mealD: string; hotelT: string; hotelD: string;
  };
  content: { eyebrow: string; title: string; desc: string; empty: string };
  blog: { eyebrow: string; title: string; desc: string; seeAll: string; backHome: string; backList: string; other: string; allDesc: string };
  contact: { eyebrow: string; title: string; desc: string; name: string; email: string; message: string; send: string; sending: string; ok: string; error: string; notConfigured: string };
  footer: { email: string; tagline: string };
  chat: { title: string; online: string; placeholder: string; greeting: string; quick: string[] };
};

export const messages: Record<Locale, Messages> = {
  // ----------------------------------------------------------------- TÜRKÇE
  tr: {
    nav: { journey: "Yolculuk", about: "Hakkında", support: "Destek Ol", content: "İçerikler", blog: "Günlük", contact: "İletişim" },
    hero: { onTheRoad: "yollarda", ctaSupport: "Yolculuğa Destek Ol", ctaStory: "Hikâyemi Oku" },
    stats: { countries: "Ülke", years: "Yıl", cities: "Şehir" },
    legend: { visited: "Gittiğim yerler", upcoming: "Gelecek rotam", current: "Şimdiki konumum" },
    about: { eyebrow: "Hakkımda", heading: "Merhaba, ben {name}.", ctaContent: "İçeriklerime Göz At", ctaSupport: "Destek Ol", badge: "Yolda" },
    journey: { eyebrow: "Rota", title: "Yolculuk çizelgesi", desc: "Nereden geçtim, şu an neredeyim ve önümde ne var — hepsi tek bakışta.", showAll: "Tüm rotayı göster", hide: "Gizle", done: "Gidildi", now: "Şu an burada", next: "Sırada" },
    support: { eyebrow: "Destek Ol", title: "Yolculuğu birlikte sürdürelim", desc: "Her destek bir kahve, bir öğün ya da güvenli bir gece demek. Küçük bir katkı, uzun bir yola güç katıyor.", donate: "Destek Ol", soon: "Yakında", popular: "En çok seçilen", wall: "Yola destek olanlar", coffeeT: "Kahve Ismarla", coffeeD: "Yoldaki kahve molama eşlik et.", mealT: "Yemek Desteği", mealD: "Bir öğün sıcak yemek demek.", hotelT: "Konaklama Desteği", hotelD: "Bir gecelik güvenli bir uyku." },
    content: { eyebrow: "İçerikler", title: "Yoldan kareler", desc: "En yeni videolar ve gönderiler. Takip et, yolculuğu kaçırma.", empty: "Öne çıkan videolar buraya gelecek." },
    blog: { eyebrow: "Günlük", title: "Ülke notları", desc: "Gezdiğim ülkelerden anılar, izlenimler ve küçük hikâyeler.", seeAll: "Tümünü gör", backHome: "Ana sayfa", backList: "Tüm ülke notları", other: "Diğer ülke notlarına dön", allDesc: "ülkeden anılar, izlenimler ve küçük hikâyeler." },
    contact: { eyebrow: "İletişim", title: "Bir mesaj bırak", desc: "Soru, iş birliği ya da sadece selam — hepsi doğrudan Arifhan'a ulaşır.", name: "Adın", email: "E-posta", message: "Mesajın...", send: "Gönder", sending: "Gönderiliyor...", ok: "Teşekkürler, mesajın ulaştı.", error: "Bir şeyler ters gitti. Doğrudan mail atabilirsin.", notConfigured: "(EmailJS henüz bağlanmadı — buton e-posta uygulamanı açar.)" },
    footer: { email: "E-posta", tagline: "Yolda, her zaman." },
    chat: { title: "Arif'in Yol Arkadaşı", online: "çevrimiçi", placeholder: "Bir şey sor...", greeting: "Merhaba, ben Arif'in yol arkadaşı. Sana nasıl yardımcı olabilirim?", quick: ["Şu an nerede?", "Sırada ne var?", "Nasıl destek olabilirim?", "Arifhan kim?"] },
  },
  // ----------------------------------------------------------------- ENGLISH
  en: {
    nav: { journey: "Journey", about: "About", support: "Support", content: "Content", blog: "Journal", contact: "Contact" },
    hero: { onTheRoad: "on the road", ctaSupport: "Support the Journey", ctaStory: "Read My Story" },
    stats: { countries: "Countries", years: "Years", cities: "Cities" },
    legend: { visited: "Places I've been", upcoming: "Upcoming route", current: "Current location" },
    about: { eyebrow: "About me", heading: "Hi, I'm {name}.", ctaContent: "See My Content", ctaSupport: "Support", badge: "On the road" },
    journey: { eyebrow: "Route", title: "Journey timeline", desc: "Where I've been, where I am now, and what's ahead — all at a glance.", showAll: "Show full route", hide: "Hide", done: "Visited", now: "Here now", next: "Next" },
    support: { eyebrow: "Support", title: "Let's keep the journey going", desc: "Every bit of support is a coffee, a meal or a safe night. A small contribution fuels a long road.", donate: "Support", soon: "Soon", popular: "Most chosen", wall: "People supporting the journey", coffeeT: "Buy a Coffee", coffeeD: "Join me for a coffee on the road.", mealT: "Meal Support", mealD: "A warm meal on the way.", hotelT: "Stay Support", hotelD: "A safe night's sleep." },
    content: { eyebrow: "Content", title: "Frames from the road", desc: "Latest videos and posts. Follow along, don't miss the journey.", empty: "Featured videos will appear here." },
    blog: { eyebrow: "Journal", title: "Country notes", desc: "Memories, impressions and little stories from the countries I've visited.", seeAll: "See all", backHome: "Home", backList: "All country notes", other: "Back to other country notes", allDesc: "countries — memories, impressions and little stories." },
    contact: { eyebrow: "Contact", title: "Leave a message", desc: "A question, a collaboration or just a hello — it all reaches Arifhan directly.", name: "Your name", email: "Email", message: "Your message...", send: "Send", sending: "Sending...", ok: "Thank you, your message has been sent.", error: "Something went wrong. You can email directly.", notConfigured: "(EmailJS not connected yet — the button opens your email app.)" },
    footer: { email: "Email", tagline: "On the road, always." },
    chat: { title: "Arif's Travel Buddy", online: "online", placeholder: "Ask something...", greeting: "Hi, I'm Arif's travel buddy. How can I help you?", quick: ["Where is he now?", "What's next?", "How can I support?", "Who is Arifhan?"] },
  },
  // ----------------------------------------------------------------- KOREAN
  ko: {
    nav: { journey: "여정", about: "소개", support: "후원", content: "콘텐츠", blog: "일지", contact: "연락" },
    hero: { onTheRoad: "여행 중", ctaSupport: "여정 후원하기", ctaStory: "내 이야기 보기" },
    stats: { countries: "국가", years: "년", cities: "도시" },
    legend: { visited: "다녀온 곳", upcoming: "예정 경로", current: "현재 위치" },
    about: { eyebrow: "소개", heading: "안녕하세요, {name}입니다.", ctaContent: "내 콘텐츠 보기", ctaSupport: "후원", badge: "여행 중" },
    journey: { eyebrow: "경로", title: "여정 타임라인", desc: "어디를 거쳤고, 지금 어디에 있으며, 앞으로 어디로 가는지 — 한눈에.", showAll: "전체 경로 보기", hide: "숨기기", done: "방문함", now: "현재 위치", next: "다음" },
    support: { eyebrow: "후원", title: "함께 여정을 이어가요", desc: "여러분의 후원은 커피 한 잔, 한 끼 식사, 안전한 하룻밤이 됩니다. 작은 정성이 긴 여정에 힘이 됩니다.", donate: "후원", soon: "곧", popular: "가장 인기", wall: "여정을 후원해 주신 분들", coffeeT: "커피 한 잔", coffeeD: "길 위의 커피 한 잔에 함께해 주세요.", mealT: "식사 후원", mealD: "따뜻한 한 끼.", hotelT: "숙박 후원", hotelD: "안전한 하룻밤." },
    content: { eyebrow: "콘텐츠", title: "여행의 순간들", desc: "최신 영상과 게시물. 팔로우하고 여정을 함께해요.", empty: "추천 영상이 여기에 표시됩니다." },
    blog: { eyebrow: "일지", title: "나라 기록", desc: "여행한 나라들의 추억과 인상, 작은 이야기들.", seeAll: "전체 보기", backHome: "홈", backList: "모든 나라 기록", other: "다른 나라 기록으로", allDesc: "개국 — 추억과 인상, 작은 이야기들." },
    contact: { eyebrow: "연락", title: "메시지를 남겨주세요", desc: "질문, 협업 또는 인사 — 모두 Arifhan에게 직접 전달됩니다.", name: "이름", email: "이메일", message: "메시지...", send: "보내기", sending: "보내는 중...", ok: "감사합니다, 메시지가 전송되었습니다.", error: "문제가 발생했습니다. 직접 이메일을 보내주세요.", notConfigured: "(EmailJS 미연결 — 버튼이 이메일 앱을 엽니다.)" },
    footer: { email: "이메일", tagline: "언제나 길 위에서." },
    chat: { title: "Arif의 여행 친구", online: "온라인", placeholder: "무엇이든 물어보세요...", greeting: "안녕하세요, Arif의 여행 친구입니다. 무엇을 도와드릴까요?", quick: ["지금 어디예요?", "다음은 어디?", "어떻게 후원하나요?", "Arifhan은 누구?"] },
  },
  // ----------------------------------------------------------------- THAI
  th: {
    nav: { journey: "การเดินทาง", about: "เกี่ยวกับ", support: "สนับสนุน", content: "เนื้อหา", blog: "บันทึก", contact: "ติดต่อ" },
    hero: { onTheRoad: "บนเส้นทาง", ctaSupport: "สนับสนุนการเดินทาง", ctaStory: "อ่านเรื่องราวของฉัน" },
    stats: { countries: "ประเทศ", years: "ปี", cities: "เมือง" },
    legend: { visited: "ที่ที่ไปมาแล้ว", upcoming: "เส้นทางต่อไป", current: "ตำแหน่งปัจจุบัน" },
    about: { eyebrow: "เกี่ยวกับฉัน", heading: "สวัสดี ฉันชื่อ {name}", ctaContent: "ดูเนื้อหาของฉัน", ctaSupport: "สนับสนุน", badge: "บนเส้นทาง" },
    journey: { eyebrow: "เส้นทาง", title: "ไทม์ไลน์การเดินทาง", desc: "ผ่านที่ไหนมาบ้าง อยู่ที่ไหนตอนนี้ และจะไปไหนต่อ — ในที่เดียว", showAll: "ดูเส้นทางทั้งหมด", hide: "ซ่อน", done: "ไปแล้ว", now: "อยู่ที่นี่", next: "ถัดไป" },
    support: { eyebrow: "สนับสนุน", title: "ไปต่อด้วยกัน", desc: "ทุกการสนับสนุนคือกาแฟ มื้ออาหาร หรือคืนที่ปลอดภัย กำลังใจเล็กๆ ช่วยเติมพลังให้เส้นทางยาวไกล", donate: "สนับสนุน", soon: "เร็วๆ นี้", popular: "ยอดนิยม", wall: "ผู้สนับสนุนการเดินทาง", coffeeT: "เลี้ยงกาแฟ", coffeeD: "ร่วมจิบกาแฟระหว่างทาง", mealT: "สนับสนุนมื้ออาหาร", mealD: "มื้ออุ่นๆ ระหว่างทาง", hotelT: "สนับสนุนที่พัก", hotelD: "คืนหนึ่งที่ปลอดภัย" },
    content: { eyebrow: "เนื้อหา", title: "ภาพจากเส้นทาง", desc: "วิดีโอและโพสต์ล่าสุด ติดตามไปด้วยกัน", empty: "วิดีโอแนะนำจะปรากฏที่นี่" },
    blog: { eyebrow: "บันทึก", title: "บันทึกประเทศ", desc: "ความทรงจำ ความประทับใจ และเรื่องเล็กๆ จากประเทศที่ไปมา", seeAll: "ดูทั้งหมด", backHome: "หน้าแรก", backList: "บันทึกประเทศทั้งหมด", other: "กลับไปบันทึกอื่น", allDesc: "ประเทศ — ความทรงจำและเรื่องราว" },
    contact: { eyebrow: "ติดต่อ", title: "ฝากข้อความ", desc: "คำถาม ความร่วมมือ หรือแค่ทักทาย — ส่งถึง Arifhan โดยตรง", name: "ชื่อของคุณ", email: "อีเมล", message: "ข้อความ...", send: "ส่ง", sending: "กำลังส่ง...", ok: "ขอบคุณ ส่งข้อความแล้ว", error: "เกิดข้อผิดพลาด ส่งอีเมลโดยตรงได้", notConfigured: "(ยังไม่ได้เชื่อม EmailJS — ปุ่มจะเปิดแอปอีเมล)" },
    footer: { email: "อีเมล", tagline: "บนเส้นทางเสมอ" },
    chat: { title: "เพื่อนร่วมทางของ Arif", online: "ออนไลน์", placeholder: "ถามอะไรก็ได้...", greeting: "สวัสดี ฉันคือเพื่อนร่วมทางของ Arif มีอะไรให้ช่วยไหม?", quick: ["ตอนนี้อยู่ที่ไหน?", "ต่อไปที่ไหน?", "สนับสนุนยังไง?", "Arifhan คือใคร?"] },
  },
  // ----------------------------------------------------------------- RUSSIAN
  ru: {
    nav: { journey: "Путешествие", about: "Обо мне", support: "Поддержать", content: "Контент", blog: "Дневник", contact: "Контакт" },
    hero: { onTheRoad: "в пути", ctaSupport: "Поддержать путешествие", ctaStory: "Моя история" },
    stats: { countries: "Стран", years: "Лет", cities: "Городов" },
    legend: { visited: "Где я был", upcoming: "Будущий маршрут", current: "Текущее место" },
    about: { eyebrow: "Обо мне", heading: "Привет, я {name}.", ctaContent: "Мой контент", ctaSupport: "Поддержать", badge: "В пути" },
    journey: { eyebrow: "Маршрут", title: "Хроника путешествия", desc: "Где я был, где я сейчас и что впереди — всё с одного взгляда.", showAll: "Показать весь маршрут", hide: "Скрыть", done: "Посещено", now: "Сейчас здесь", next: "Далее" },
    support: { eyebrow: "Поддержать", title: "Продолжим путь вместе", desc: "Любая поддержка — это кофе, обед или безопасная ночь. Маленький вклад придаёт силы долгой дороге.", donate: "Поддержать", soon: "Скоро", popular: "Чаще выбирают", wall: "Те, кто поддержал путь", coffeeT: "Угостить кофе", coffeeD: "Кофе в дороге вместе.", mealT: "Поддержка едой", mealD: "Тёплый обед в пути.", hotelT: "Поддержка ночлега", hotelD: "Безопасная ночь." },
    content: { eyebrow: "Контент", title: "Кадры из дороги", desc: "Свежие видео и посты. Подписывайтесь, не пропустите путешествие.", empty: "Здесь появятся избранные видео." },
    blog: { eyebrow: "Дневник", title: "Заметки о странах", desc: "Воспоминания, впечатления и маленькие истории из посещённых стран.", seeAll: "Все заметки", backHome: "Главная", backList: "Все заметки о странах", other: "К другим заметкам", allDesc: "стран — воспоминания и истории." },
    contact: { eyebrow: "Контакт", title: "Оставьте сообщение", desc: "Вопрос, сотрудничество или просто привет — всё дойдёт прямо до Arifhan.", name: "Ваше имя", email: "Эл. почта", message: "Ваше сообщение...", send: "Отправить", sending: "Отправка...", ok: "Спасибо, сообщение отправлено.", error: "Что-то пошло не так. Можно написать напрямую.", notConfigured: "(EmailJS ещё не подключён — кнопка откроет почту.)" },
    footer: { email: "Эл. почта", tagline: "Всегда в пути." },
    chat: { title: "Спутник Arif", online: "онлайн", placeholder: "Спросите что-нибудь...", greeting: "Привет, я спутник Arif. Чем могу помочь?", quick: ["Где он сейчас?", "Что дальше?", "Как поддержать?", "Кто такой Arifhan?"] },
  },
  // ----------------------------------------------------------------- ARABIC (RTL)
  ar: {
    nav: { journey: "الرحلة", about: "نبذة", support: "ادعم", content: "المحتوى", blog: "اليوميات", contact: "تواصل" },
    hero: { onTheRoad: "على الطريق", ctaSupport: "ادعم الرحلة", ctaStory: "اقرأ قصتي" },
    stats: { countries: "دولة", years: "سنة", cities: "مدينة" },
    legend: { visited: "أماكن زرتها", upcoming: "المسار القادم", current: "الموقع الحالي" },
    about: { eyebrow: "نبذة عني", heading: "مرحبًا، أنا {name}.", ctaContent: "شاهد محتواي", ctaSupport: "ادعم", badge: "على الطريق" },
    journey: { eyebrow: "المسار", title: "الخط الزمني للرحلة", desc: "أين كنت، أين أنا الآن، وما الذي ينتظرني — كل ذلك بنظرة واحدة.", showAll: "عرض المسار كامل", hide: "إخفاء", done: "تمت الزيارة", now: "هنا الآن", next: "التالي" },
    support: { eyebrow: "ادعم", title: "لنكمل الرحلة معًا", desc: "كل دعم هو قهوة أو وجبة أو ليلة آمنة. مساهمة صغيرة تمنح القوة لطريق طويل.", donate: "ادعم", soon: "قريبًا", popular: "الأكثر اختيارًا", wall: "الداعمون للرحلة", coffeeT: "اشترِ قهوة", coffeeD: "شاركني قهوة على الطريق.", mealT: "دعم وجبة", mealD: "وجبة دافئة في الطريق.", hotelT: "دعم الإقامة", hotelD: "ليلة آمنة للنوم." },
    content: { eyebrow: "المحتوى", title: "لقطات من الطريق", desc: "أحدث الفيديوهات والمنشورات. تابعني ولا تفوّت الرحلة.", empty: "ستظهر الفيديوهات المميزة هنا." },
    blog: { eyebrow: "اليوميات", title: "ملاحظات الدول", desc: "ذكريات وانطباعات وقصص صغيرة من الدول التي زرتها.", seeAll: "عرض الكل", backHome: "الرئيسية", backList: "كل ملاحظات الدول", other: "العودة إلى الملاحظات الأخرى", allDesc: "دولة — ذكريات وقصص." },
    contact: { eyebrow: "تواصل", title: "اترك رسالة", desc: "سؤال أو تعاون أو مجرد تحية — تصل مباشرة إلى Arifhan.", name: "اسمك", email: "البريد الإلكتروني", message: "رسالتك...", send: "إرسال", sending: "جارٍ الإرسال...", ok: "شكرًا، تم إرسال رسالتك.", error: "حدث خطأ ما. يمكنك المراسلة مباشرة.", notConfigured: "(لم يتم ربط EmailJS بعد — الزر يفتح تطبيق البريد.)" },
    footer: { email: "البريد", tagline: "على الطريق دائمًا." },
    chat: { title: "رفيق Arif", online: "متصل", placeholder: "اسأل أي شيء...", greeting: "مرحبًا، أنا رفيق Arif. كيف أساعدك؟", quick: ["أين هو الآن؟", "ما التالي؟", "كيف أدعم؟", "من هو Arifhan؟"] },
  },
  // ----------------------------------------------------------------- CHINESE
  zh: {
    nav: { journey: "旅程", about: "关于", support: "支持", content: "内容", blog: "日志", contact: "联系" },
    hero: { onTheRoad: "在路上", ctaSupport: "支持旅程", ctaStory: "阅读我的故事" },
    stats: { countries: "国家", years: "年", cities: "城市" },
    legend: { visited: "去过的地方", upcoming: "未来路线", current: "当前位置" },
    about: { eyebrow: "关于我", heading: "你好，我是 {name}。", ctaContent: "查看我的内容", ctaSupport: "支持", badge: "在路上" },
    journey: { eyebrow: "路线", title: "旅程时间线", desc: "去过哪里、现在在哪、接下来去哪 — 一目了然。", showAll: "查看完整路线", hide: "隐藏", done: "已到访", now: "现在在此", next: "下一站" },
    support: { eyebrow: "支持", title: "一起继续旅程", desc: "每一份支持都是一杯咖啡、一顿饭或一个安心的夜晚。小小的心意为漫长的旅途加油。", donate: "支持", soon: "即将", popular: "最多人选", wall: "支持旅程的人", coffeeT: "请喝咖啡", coffeeD: "在路上陪我喝杯咖啡。", mealT: "餐食支持", mealD: "路上的一顿热饭。", hotelT: "住宿支持", hotelD: "一个安心的夜晚。" },
    content: { eyebrow: "内容", title: "路上的画面", desc: "最新视频和动态。关注我，别错过旅程。", empty: "精选视频将显示在这里。" },
    blog: { eyebrow: "日志", title: "国家笔记", desc: "来自我到访国家的回忆、印象和小故事。", seeAll: "查看全部", backHome: "首页", backList: "所有国家笔记", other: "返回其他笔记", allDesc: "个国家 — 回忆与故事。" },
    contact: { eyebrow: "联系", title: "留言", desc: "提问、合作，或只是打个招呼 — 都会直接到达 Arifhan。", name: "你的名字", email: "邮箱", message: "你的留言...", send: "发送", sending: "发送中...", ok: "谢谢，留言已发送。", error: "出了点问题。你可以直接发邮件。", notConfigured: "(EmailJS 尚未连接 — 按钮会打开邮件应用。)" },
    footer: { email: "邮箱", tagline: "永远在路上。" },
    chat: { title: "Arif 的旅伴", online: "在线", placeholder: "问点什么...", greeting: "你好，我是 Arif 的旅伴。需要什么帮助？", quick: ["他现在在哪？", "下一站？", "如何支持？", "Arifhan 是谁？"] },
  },
};
