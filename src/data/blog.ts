// ============================================================================
// BLOG / ÜLKE NOTLARI
// ----------------------------------------------------------------------------
// Her ülke için kısa, doğal bir yazı + fotoğraf galerisi.
// Görseller şimdilik ülkeyle ilgili otomatik yer-tutuculardır; Arifhan ileride
// admin panelinden (Sanity) kendi fotoğraflarını yükleyip değiştirecek.
//
// Kendi fotoğrafını şimdiden eklemek istersen:
//   public/posts/<id>/1.jpg, 2.jpg ...  koy ve post.localPhotos = 3 yap.
// ============================================================================

export type Post = {
  id: string; // url slug
  title: string;
  country: string;
  city: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  photoKeyword: string; // yer-tutucu görsel için anahtar kelime
  photoSeed: number; // görseli sabitlemek için
  photoCount: number; // kaç yer-tutucu görsel
  localPhotos?: number; // public/posts/<id>/ içinde kaç gerçek foto var (varsa)
};

export const posts: Post[] = [
  {
    id: "japonya",
    title: "Japonya: Düzenin ve inceliğin ülkesi",
    country: "Japonya",
    city: "Tokyo",
    date: "2024-04",
    excerpt: "Tokyo'nun neon ışıkları ile tapınakların sessizliği aynı şehirde buluşuyor.",
    paragraphs: [
      "Japonya'ya ayak bastığım an beni en çok etkileyen şey, kalabalığın içindeki o tuhaf sükûnet oldu. Tokyo'da milyonlarca insan akıyor ama kimse birbirine çarpmıyor; her şey bir saat gibi işliyor. Shibuya'nın o meşhur meydanında ışıklar yanıp sönerken bir köşede küçük bir tapınağın önünde durup nefes alabiliyorsun.",
      "Yemekleri ayrı bir dünya. Bir ramen tezgâhının başında oturup şefin işine gösterdiği özeni izlemek başlı başına bir deneyimdi. Japonya bana, hızlı yaşarken bile inceliği kaybetmemeyi öğretti.",
    ],
    photoKeyword: "tokyo,japan",
    photoSeed: 101,
    photoCount: 3,
  },
  {
    id: "guney-kore",
    title: "Güney Kore: Geleneğin ve teknolojinin dansı",
    country: "Güney Kore",
    city: "Seul",
    date: "2024-05",
    excerpt: "Seul'de bir sokak eski sarayları, diğeri geleceği gösteriyor.",
    paragraphs: [
      "Seul, geçmişle geleceğin yan yana yürüdüğü bir şehir. Gyeongbokgung Sarayı'nın avlusunda geleneksel hanbok giymiş insanlarla dolaşırken, birkaç sokak ötede dev ekranlar ve K-pop müziği karşılıyor seni. Bu zıtlık hiç rahatsız etmiyor, aksine şehre ayrı bir ritim katıyor.",
      "Sokak yemekleri kültürü inanılmaz. Akşam pazarlarında tteokbokki ve sıcak çaylarla karnımı doyurup insanlarla sohbet ettim. Koreliler önce çekingen ama buzları kırınca çok sıcak çıkıyor.",
    ],
    photoKeyword: "seoul,korea",
    photoSeed: 111,
    photoCount: 3,
  },
  {
    id: "filipinler",
    title: "Filipinler: Yedi bin adanın gülümsemesi",
    country: "Filipinler",
    city: "Manila",
    date: "2024-06",
    excerpt: "Turkuaz sular ve dünyanın en içten gülümsemeleri.",
    paragraphs: [
      "Filipinler denince aklıma önce insanların gülümsemesi geliyor. Maddi olarak çok şeyleri olmasa da paylaşmaya bu kadar hevesli bir halk az görülür. Manila'nın kaosundan adalara açıldığımda ise bambaşka bir dünya vardı: berrak sular, el değmemiş koylar.",
      "Bir balıkçı teknesinde geçirdiğim gün unutamadığım anlardan biri. Taze yakalanmış balığı sahilde pişirip birlikte yedik. Konuştuğumuz dil farklıydı ama kahkaha her yerde aynıydı.",
    ],
    photoKeyword: "philippines,beach",
    photoSeed: 121,
    photoCount: 3,
  },
  {
    id: "vietnam",
    title: "Vietnam: Motor sesleri ve pirinç tarlaları",
    country: "Vietnam",
    city: "Hanoi",
    date: "2024-07",
    excerpt: "Hanoi'nin curcunası, kuzeyin yeşil teraslarına karışıyor.",
    paragraphs: [
      "Vietnam'ın ilk dersi: caddeyi geçmeyi öğrenmek. Hanoi'de binlerce motor bir nehir gibi akıyor ve sen sadece yavaşça yürümeye devam ediyorsun, onlar etrafından dolanıyor. İlk başta korkutucu, sonra bir ritme dönüşüyor.",
      "Asıl güzellik şehirden çıkınca başladı. Kuzeyin basamak basamak pirinç tarlaları, sabah sisinin içinde adeta resim gibiydi. Bir kâse sıcak pho ile başlayan günler, bu ülkeyi kalbime kazıdı.",
    ],
    photoKeyword: "vietnam,hanoi",
    photoSeed: 131,
    photoCount: 3,
  },
  {
    id: "tayland",
    title: "Tayland: Gülümsemeler ülkesi",
    country: "Tayland",
    city: "Bangkok",
    date: "2024-08",
    excerpt: "Tapınaklar, sokak mutfağı ve durmak bilmeyen bir enerji.",
    paragraphs: [
      "Bangkok ilk anda insanı yutan bir şehir: sıcak, renkli, gürültülü ve çok canlı. Ama altın tapınakların avlusuna girdiğinde bambaşka bir huzur seni sarıyor. Bu denge Tayland'ın her yerinde var.",
      "Sokak mutfağı bence dünyanın en iyilerinden. Bir tezgâhın başında pad thai yaparken şefi izlemek, akşam pazarlarında kaybolmak... Az parayla çok mutlu olunabileceğini bana yeniden hatırlattı.",
    ],
    photoKeyword: "thailand,bangkok,temple",
    photoSeed: 141,
    photoCount: 3,
  },
  {
    id: "laos",
    title: "Laos: Zamanın yavaşladığı yer",
    country: "Laos",
    city: "Vientiane",
    date: "2024-09",
    excerpt: "Acelesi olmayan, sakin ve samimi bir ülke.",
    paragraphs: [
      "Laos, komşularının aksine çok sakin bir ülke. Vientiane belki dünyanın en sessiz başkentlerinden biri. Mekong Nehri kıyısında gün batımını izlerken zamanın gerçekten yavaşladığını hissettim.",
      "Buranın güzelliği gösterişsiz olmasında. Tapınakların önünde turuncu cübbeli genç keşişler, kıyıdaki küçük lokantalar, sıcak insanlar... Hızlı seyahatten yorulduğunda Laos tam bir nefes molası.",
    ],
    photoKeyword: "laos,mekong",
    photoSeed: 151,
    photoCount: 3,
  },
  {
    id: "kuveyt",
    title: "Kuveyt: Çölün ortasında modern bir vaha",
    country: "Kuveyt",
    city: "Kuveyt",
    date: "2024-10",
    excerpt: "Gökdelenler, körfez esintisi ve misafirperver bir kültür.",
    paragraphs: [
      "Kuveyt, küçük ama zengin bir ülke. Körfez kıyısındaki kuleler, özellikle akşam ışıklarıyla çok etkileyici. Sıcak burada hayatın merkezinde; insanlar günü serinleyince yaşamaya başlıyor.",
      "En çok misafirperverlikleri kaldı aklımda. Bir aile beni evine çağırıp Arap kahvesi ve hurma ikram etti. Az tanınan bir durak ama Körfez kültürünü yakından görmek isteyene değer.",
    ],
    photoKeyword: "kuwait,city",
    photoSeed: 161,
    photoCount: 3,
  },
  {
    id: "umman",
    title: "Umman: Dağların ve denizin buluştuğu ülke",
    country: "Umman",
    city: "Maskat",
    date: "2024-11",
    excerpt: "Sade, asil ve doğal güzelliklerle dolu bir Arap ülkesi.",
    paragraphs: [
      "Umman, Körfez'in en huzurlu ülkesi gibiydi. Maskat gösterişten uzak, beyaz binaları ve temiz sokaklarıyla insana güven veriyor. Büyük Camii'nin sade ihtişamı uzun süre aklımdan çıkmadı.",
      "Asıl sürpriz doğasıydı: bir günde hem dağ vadilerinde yüzdüm hem çölde yıldızların altında uyudum. Ummanlılar sakin ve nazik; bu ülke turist kalabalığından uzak, gerçek bir keşif.",
    ],
    photoKeyword: "oman,muscat",
    photoSeed: 171,
    photoCount: 3,
  },
  {
    id: "makedonya",
    title: "Makedonya: Balkanların sıcak kalbi",
    country: "Makedonya",
    city: "Üsküp",
    date: "2025-01",
    excerpt: "Tarihî köprüler, Osmanlı izleri ve içten insanlar.",
    paragraphs: [
      "Üsküp'te yürürken kendimi evimde gibi hissettim. Taş Köprü, eski çarşı, camiler ve çan sesleri... Osmanlı'nın izini Balkanlarda bu kadar canlı görmek tuhaf bir duygu. Çarşıda Türkçe konuşan esnafla sohbet etmek çok keyifliydi.",
      "Makedonya hem yakın hem farklı. Ohri Gölü'nün berraklığı, dağ köylerinin sadeliği insanı yavaşlatıyor. Balkanlara gelen herkesin listesinde olmalı.",
    ],
    photoKeyword: "skopje,macedonia",
    photoSeed: 181,
    photoCount: 3,
  },
  {
    id: "cin",
    title: "Çin: Büyüklüğün her anlamıyla yaşandığı yer",
    country: "Çin",
    city: "Pekin",
    date: "2025-02",
    excerpt: "Bir uçta Çin Seddi, diğer uçta dev metropoller.",
    paragraphs: [
      "Çin'de her şey büyük: şehirler, kalabalık, tarih. Çin Seddi'nin üzerinde yürürken bu duvarın dağlar boyunca uzanışını görmek insanı küçücük hissettiriyor. Pekin'in geniş meydanları, dar hutong sokaklarıyla zıtlık oluşturuyor.",
      "Dil burada en büyük zorluktu ama el kol hareketleri ve gülümseme her kapıyı açıyor. Sokak lezzetlerinden saray kalıntılarına kadar Çin, tek bir gezide anlaşılamayacak kadar derin bir ülke.",
    ],
    photoKeyword: "china,beijing,great-wall",
    photoSeed: 191,
    photoCount: 3,
  },
  {
    id: "gurcistan",
    title: "Gürcistan: Dağların ardındaki sıcaklık",
    country: "Gürcistan",
    city: "Tiflis",
    date: "2025-03",
    excerpt: "Misafirperverliğin, şarabın ve dağların ülkesi.",
    paragraphs: [
      "Gürcistan'a adım attığım an beni karşılayan ilk şey insanların içtenliği oldu. Tiflis'in dar, eğri büğrü sokaklarında kaybolmak, kükürtlü hamamların buharı, balkonlardan sarkan asmalar... Şehir adeta yaşıyor.",
      "Bir Gürcü sofrasına oturmak başlı başına bir tören. Tamada denen sofra başkanı kadeh kaldırırken, sıcak ekmek ve ev şarabıyla saatler nasıl geçti anlamadım. Komşumuz ama ne kadar az tanıyoruz.",
    ],
    photoKeyword: "tbilisi,georgia",
    photoSeed: 201,
    photoCount: 3,
  },
  {
    id: "hong-kong",
    title: "Hong Kong: Gökyüzüne uzanan şehir",
    country: "Hong Kong",
    city: "Hong Kong",
    date: "2025-03",
    excerpt: "Gökdelenlerin arasında saklı tapınaklar ve körfez manzarası.",
    paragraphs: [
      "Hong Kong dikey bir şehir; gökdelenler birbiriyle yarışırcasına yükseliyor. Victoria Tepesi'nden bakınca bu beton ormanın ne kadar büyük olduğunu anlıyorsun. Ama her köşesinde bir sürpriz var.",
      "Işıltılı caddelerin arasında küçük tapınaklar, tütsü kokuları ve sıcak dim sum lokantaları gizli. Doğu ile Batı'nın bu kadar iç içe geçtiği başka bir yer görmedim.",
    ],
    photoKeyword: "hong-kong,skyline",
    photoSeed: 211,
    photoCount: 3,
  },
  {
    id: "mogolistan",
    title: "Moğolistan: Uçsuz bucaksız bozkırın özgürlüğü",
    country: "Moğolistan",
    city: "Ulan Batur",
    date: "2025-04",
    excerpt: "Göçebe kültür, sonsuz bozkır ve yıldızlarla dolu gökyüzü.",
    paragraphs: [
      "Moğolistan, şimdiye dek gördüğüm en boş ve en özgür yerdi. Ulan Batur'dan çıkıp bozkıra vurduğunda kilometrelerce hiçbir şey yok; sadece sen, atlar ve gökyüzü. Bu boşluk insanı tuhaf bir şekilde dinlendiriyor.",
      "Bir göçebe ailenin ger çadırında konuk oldum. Sıcak süt çayı, sadelik ve doğayla iç içe bir yaşam... Geceleri çadırın dışına çıkıp gördüğüm yıldızları asla unutmayacağım.",
    ],
    photoKeyword: "mongolia,steppe",
    photoSeed: 221,
    photoCount: 3,
  },
  {
    id: "azerbaycan",
    title: "Azerbaycan: Ateşin ve rüzgârın diyarı",
    country: "Azerbaycan",
    city: "Bakü",
    date: "2025-04",
    excerpt: "Modern Bakü, eski şehrin taş sokaklarını kucaklıyor.",
    paragraphs: [
      "Bakü'de 'kardeş ülke' lafının ne demek olduğunu hissettim. Dil neredeyse aynı, sofra aynı, sıcaklık aynı. Hazar kıyısındaki modern kuleler ile İçerişehir'in taş sokakları arasında yürümek zamanın içinde gezinmek gibiydi.",
      "Azerbaycan toprağı adeta canlı; yanardağ çamurları, sönmeyen ateş tepeleri... Çay kültürü ise başlı başına bir dünya. Armudu bardakta demli çay eşliğinde saatlerce sohbet edilir burada.",
    ],
    photoKeyword: "baku,azerbaijan",
    photoSeed: 231,
    photoCount: 3,
  },
  {
    id: "singapur",
    title: "Singapur: Geleceğe yapılmış bir şehir",
    country: "Singapur",
    city: "Singapur",
    date: "2025-05",
    excerpt: "Tertemiz, yeşil ve baş döndürücü derecede düzenli.",
    paragraphs: [
      "Singapur sanki gelecekten gelmiş bir şehir-devlet. Her şey tertemiz, düzenli ve yemyeşil. Gardens by the Bay'deki dev ağaç heykellerin arasında yürürken doğa ile teknolojinin nasıl bu kadar iç içe geçtiğine şaştım.",
      "Burada onlarca kültür bir arada yaşıyor: Çin mahallesi, Hint mahallesi, Malay lezzetleri... Tek bir günde dünya turu yapmış gibi hissettim. Pahalı bir durak ama görülmeye değer.",
    ],
    photoKeyword: "singapore,marina-bay",
    photoSeed: 241,
    photoCount: 3,
  },
  {
    id: "kambocya",
    title: "Kamboçya: Tapınakların gölgesinde",
    country: "Kamboçya",
    city: "Phnom Penh",
    date: "2025-05",
    excerpt: "Angkor'un ihtişamı ve halkın sarsılmaz güleryüzü.",
    paragraphs: [
      "Kamboçya hem hüznü hem umudu aynı anda taşıyan bir ülke. Zor bir geçmişe rağmen insanların yüzündeki gülümseme hiç eksilmiyor. Phnom Penh'in hareketli sokaklarında bu dirayeti hissedebiliyorsun.",
      "Angkor tapınaklarının arasında gün doğumunu izlemek hayatımın en etkileyici anlarından biriydi. Ağaç kökleriyle sarmaş dolaş olmuş taş duvarlar, zamanın gücünü gözüne sokuyor insanın.",
    ],
    photoKeyword: "cambodia,angkor",
    photoSeed: 251,
    photoCount: 3,
  },
  {
    id: "ermenistan",
    title: "Ermenistan: Taşa kazınmış bir tarih",
    country: "Ermenistan",
    city: "Erivan",
    date: "2025-06",
    excerpt: "Ağrı Dağı manzarası, antik manastırlar ve kadim bir kültür.",
    paragraphs: [
      "Erivan'da en çok şaşırtan şey, şehrin her yerinden Ağrı Dağı'nı görebilmekti. Pembe taştan binalarıyla sıcak bir şehir. Sabah kahvenisi içip meydanlarda insanları izlemek güzeldi.",
      "Şehirden çıkıp dağlardaki antik manastırlara gittiğimde, taşa işlenen bu kadim kültürün derinliğini gördüm. Komşu coğrafyada yaşananlara rağmen sıradan insanların sıcaklığı hep aynı kalıyor.",
    ],
    photoKeyword: "yerevan,armenia",
    photoSeed: 261,
    photoCount: 3,
  },
  {
    id: "karadag",
    title: "Karadağ: Adriyatik'in saklı incisi",
    country: "Karadağ",
    city: "Podgorica",
    date: "2025-06",
    excerpt: "Fiyort benzeri koylar, dağ köyleri ve masmavi bir deniz.",
    paragraphs: [
      "Karadağ küçük ama içine sığdırdığı güzellik şaşırtıcı. Kotor Körfezi'nin dağların arasına saklanmış suları, Akdeniz'de adeta bir fiyort hissi veriyor. Eski şehrin taş sokaklarında kaybolmak çok keyifliydi.",
      "Sahilden birkaç saat içeri girince bambaşka bir dünya: yüksek dağlar, sessiz köyler ve buz gibi nehirler. Balkanların bu küçük ülkesi, az bilinen ama insanın aklından çıkmayan duraklardan.",
    ],
    photoKeyword: "montenegro,kotor",
    photoSeed: 271,
    photoCount: 3,
  },
];

// Bir yazının fotoğraf URL'lerini üret (gerçek foto varsa onları, yoksa yer-tutucu)
export function getPhotos(post: Post): string[] {
  if (post.localPhotos && post.localPhotos > 0) {
    return Array.from({ length: post.localPhotos }, (_, i) => `/posts/${post.id}/${i + 1}.jpg`);
  }
  return Array.from(
    { length: post.photoCount },
    (_, i) => `https://loremflickr.com/800/600/${post.photoKeyword}?lock=${post.photoSeed + i}`
  );
}

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
