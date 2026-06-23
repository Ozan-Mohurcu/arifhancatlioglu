// ============================================================================
// BLOG — İngilizce çeviriler (id ile eşleşir)
// tr/en dışındaki diller bu İngilizce metne düşer.
// ============================================================================

export type PostTranslation = {
  title: string;
  excerpt: string;
  paragraphs: string[];
};

export const postsEn: Record<string, PostTranslation> = {
  japonya: {
    title: "Japan: A land of order and refinement",
    excerpt: "Tokyo's neon lights and the silence of temples meet in the same city.",
    paragraphs: [
      "The moment I set foot in Japan, what struck me most was the strange calm within the crowd. In Tokyo millions of people flow past, yet no one bumps into anyone; everything runs like clockwork. While the lights flash across the famous Shibuya crossing, you can pause at a small temple on the corner and breathe.",
      "The food is a world of its own. Sitting at a ramen counter and watching the care the chef puts into the work was an experience in itself. Japan taught me to keep my sense of refinement even while living fast.",
    ],
  },
  "guney-kore": {
    title: "South Korea: A dance of tradition and technology",
    excerpt: "In Seoul one street shows ancient palaces, the next shows the future.",
    paragraphs: [
      "Seoul is a city where past and future walk side by side. While strolling through the courtyard of Gyeongbokgung Palace among people in traditional hanbok, just a few streets away giant screens and K-pop greet you. This contrast never feels jarring; it gives the city its own rhythm.",
      "The street food culture is incredible. At the night markets I filled up on tteokbokki and warm tea while chatting with people. Koreans are shy at first, but once the ice breaks they're very warm.",
    ],
  },
  filipinler: {
    title: "Philippines: The smile of seven thousand islands",
    excerpt: "Turquoise waters and some of the warmest smiles in the world.",
    paragraphs: [
      "When I think of the Philippines, the first thing that comes to mind is people's smiles. Even without much materially, you rarely see a people so eager to share. Once I left the chaos of Manila for the islands, there was a whole other world: crystal-clear waters and untouched coves.",
      "A day I spent on a fisherman's boat is one of the moments I can't forget. We cooked the freshly caught fish on the shore and ate together. The language we spoke was different, but laughter was the same everywhere.",
    ],
  },
  vietnam: {
    title: "Vietnam: Motorbike sounds and rice fields",
    excerpt: "The buzz of Hanoi blends into the green terraces of the north.",
    paragraphs: [
      "Vietnam's first lesson: learning to cross the street. In Hanoi thousands of motorbikes flow like a river, and you just keep walking slowly while they weave around you. Frightening at first, then it turns into a rhythm.",
      "The real beauty began once I left the city. The step-by-step rice terraces of the north looked like a painting in the morning mist. Days that started with a hot bowl of pho carved this country into my heart.",
    ],
  },
  tayland: {
    title: "Thailand: Land of smiles",
    excerpt: "Temples, street kitchens and endless energy.",
    paragraphs: [
      "Bangkok swallows you whole at first: hot, colourful, loud and very alive. But the moment you step into a golden temple courtyard, a completely different peace wraps around you. This balance is everywhere in Thailand.",
      "The street food is among the best in the world in my opinion. Watching a chef make pad thai at a stall, getting lost in the night markets... It reminded me again that you can be very happy with very little.",
    ],
  },
  laos: {
    title: "Laos: Where time slows down",
    excerpt: "An unhurried, calm and sincere country.",
    paragraphs: [
      "Unlike its neighbours, Laos is a very calm country. Vientiane is perhaps one of the quietest capitals in the world. Watching the sunset on the banks of the Mekong, I felt time truly slow down.",
      "Its beauty lies in being unpretentious. Young monks in orange robes in front of the temples, little eateries by the river, warm people... When you're tired of fast travel, Laos is the perfect breath of fresh air.",
    ],
  },
  kuveyt: {
    title: "Kuwait: A modern oasis in the desert",
    excerpt: "Skyscrapers, a gulf breeze and a hospitable culture.",
    paragraphs: [
      "Kuwait is a small but wealthy country. The towers along the gulf are striking, especially with the evening lights. The heat is at the centre of life here; people start living once it cools down.",
      "What stayed with me most was their hospitality. A family invited me into their home and served Arabic coffee and dates. It's a little-known stop, but worth it for anyone wanting to see Gulf culture up close.",
    ],
  },
  umman: {
    title: "Oman: Where mountains meet the sea",
    excerpt: "A simple, noble Arab country full of natural beauty.",
    paragraphs: [
      "Oman felt like the most peaceful country in the Gulf. Muscat, with its white buildings and clean streets, gives you a sense of trust far from showiness. The simple grandeur of the Grand Mosque stayed in my mind for a long time.",
      "The real surprise was its nature: in a single day I swam in mountain valleys and slept under the stars in the desert. Omanis are calm and gentle; this country is a true discovery, far from tourist crowds.",
    ],
  },
  makedonya: {
    title: "North Macedonia: The warm heart of the Balkans",
    excerpt: "Historic bridges, Ottoman traces and sincere people.",
    paragraphs: [
      "Walking through Skopje, I felt at home. The Stone Bridge, the old bazaar, mosques and the sound of bells... Seeing the Ottoman trace so alive in the Balkans is a strange feeling. Chatting with shopkeepers speaking Turkish in the bazaar was a delight.",
      "Macedonia is both familiar and different. The clarity of Lake Ohrid and the simplicity of mountain villages slow you down. It should be on everyone's list when coming to the Balkans.",
    ],
  },
  cin: {
    title: "China: Where bigness is felt in every sense",
    excerpt: "The Great Wall at one end, vast metropolises at the other.",
    paragraphs: [
      "Everything in China is big: the cities, the crowds, the history. Walking on the Great Wall and seeing it stretch over the mountains makes you feel tiny. Beijing's wide squares contrast with its narrow hutong streets.",
      "Language was the biggest challenge here, but gestures and a smile open every door. From street flavours to palace ruins, China is a country too deep to grasp in a single trip.",
    ],
  },
  gurcistan: {
    title: "Georgia: Warmth beyond the mountains",
    excerpt: "A land of hospitality, wine and mountains.",
    paragraphs: [
      "The moment I set foot in Georgia, the first thing to greet me was people's sincerity. Getting lost in Tbilisi's narrow, crooked streets, the steam of the sulphur baths, vines hanging from balconies... The city is practically alive.",
      "Sitting at a Georgian table is a ceremony in itself. As the 'tamada' (table master) raised his glass, hours flew by with warm bread and homemade wine. They're our neighbours, yet we know so little about them.",
    ],
  },
  "hong-kong": {
    title: "Hong Kong: A city reaching for the sky",
    excerpt: "Temples hidden among skyscrapers and a harbour view.",
    paragraphs: [
      "Hong Kong is a vertical city; skyscrapers rise as if competing with one another. Looking out from Victoria Peak, you understand how vast this concrete forest is. But there's a surprise in every corner.",
      "Between the glittering avenues hide small temples, the scent of incense and warm dim sum restaurants. I've never seen another place where East and West are so intertwined.",
    ],
  },
  mogolistan: {
    title: "Mongolia: The freedom of endless steppe",
    excerpt: "Nomadic culture, infinite steppe and a sky full of stars.",
    paragraphs: [
      "Mongolia was the emptiest and freest place I've seen so far. Once you leave Ulaanbaatar and hit the steppe, there's nothing for kilometres; just you, the horses and the sky. This emptiness rests you in a strange way.",
      "I was a guest in the ger of a nomadic family. Warm milk tea, simplicity and a life intertwined with nature... I'll never forget the stars I saw stepping out of the tent at night.",
    ],
  },
  azerbaycan: {
    title: "Azerbaijan: Land of fire and wind",
    excerpt: "Modern Baku embraces the stone streets of the old city.",
    paragraphs: [
      "In Baku I felt what the phrase 'brother country' really means. The language is almost the same, the table is the same, the warmth is the same. Walking between the modern towers by the Caspian and the stone streets of the Old City felt like strolling through time.",
      "Azerbaijan's land is practically alive; mud volcanoes, hills of eternal flame... Tea culture is a world of its own. Here you chat for hours over strong tea in a pear-shaped glass.",
    ],
  },
  singapur: {
    title: "Singapore: A city built for the future",
    excerpt: "Spotless, green and dizzyingly orderly.",
    paragraphs: [
      "Singapore feels like a city-state from the future. Everything is spotless, orderly and lush green. Walking among the giant tree sculptures at Gardens by the Bay, I marvelled at how nature and technology blend so seamlessly.",
      "Dozens of cultures live together here: Chinatown, Little India, Malay flavours... In a single day I felt like I'd toured the world. An expensive stop, but worth seeing.",
    ],
  },
  kambocya: {
    title: "Cambodia: In the shadow of the temples",
    excerpt: "The grandeur of Angkor and the unshakable smile of its people.",
    paragraphs: [
      "Cambodia carries both sorrow and hope at once. Despite a hard past, the smile on people's faces never fades. You can feel this resilience in the lively streets of Phnom Penh.",
      "Watching the sunrise among the temples of Angkor was one of the most striking moments of my life. Stone walls entwined with tree roots drive home the power of time.",
    ],
  },
  ermenistan: {
    title: "Armenia: A history carved in stone",
    excerpt: "Views of Mount Ararat, ancient monasteries and an ancient culture.",
    paragraphs: [
      "In Yerevan, what surprised me most was being able to see Mount Ararat from everywhere in the city. A warm city with its pink-stone buildings. It was lovely to have morning coffee and watch people in the squares.",
      "When I left the city for the ancient monasteries in the mountains, I saw the depth of this age-old culture carved into stone. Despite everything in the neighbouring region, the warmth of ordinary people always stays the same.",
    ],
  },
  karadag: {
    title: "Montenegro: The hidden pearl of the Adriatic",
    excerpt: "Fjord-like bays, mountain villages and a deep blue sea.",
    paragraphs: [
      "Montenegro is small, but the beauty it packs in is astonishing. The waters of the Bay of Kotor, tucked between mountains, give an almost fjord-like feel on the Mediterranean. Getting lost in the stone streets of the old town was a delight.",
      "A few hours inland from the coast there's a whole other world: high mountains, quiet villages and ice-cold rivers. This little Balkan country is one of those little-known stops that stays on your mind.",
    ],
  },
};
