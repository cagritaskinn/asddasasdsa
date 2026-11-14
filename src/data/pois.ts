export type HiddenSecret = {
  id: string;
  title: string;
  description: string;
  requiredKey?: string;
  lootTip: string;
};

export type Poi = {
  id: string;
  name: string;
  district: string;
  teaser: string;
  wikiUrl?: string;
  secrets: HiddenSecret[];
};

export const LOOTY_BAY_POIS: Poi[] = [
  {
    id: "gas-station",
    name: "Benzin İstasyonu",
    district: "Looty Bay — Merkez",
    teaser: "Asansör ve iki yan oda duvarların arkasında.",
    wikiUrl: "https://robrunwiki.com/wiki/Gas_Station",
    secrets: [
      {
        id: "gs-lift",
        title: "Gizli Asansör",
        description:
          "Ana tezgahtan sonra arka depoda gizli lift; üst kata veya kasa odasına çıkar.",
        requiredKey: "Mor Anahtar (Purple Key)",
        lootTip: "Lifti açmadan önce alarm susturucu veya hızlı giriş planı düşün.",
      },
      {
        id: "gs-left",
        title: "Sol Arka Oda",
        description: "Sol duvar paneli kırılabilir veya anahtarlı küçük ofis.",
        requiredKey: "Mavi Anahtar veya Crowbar",
        lootTip: "Nakit çekmecesi ve sınırlı cephane; rush için ikincil hedef.",
      },
      {
        id: "gs-right",
        title: "Sağ Arka Oda",
        description: "Sağ tarafta kasa ve yağ stokunun arkasında ekstra raf.",
        lootTip: "Kasa drill ile; mor anahtar olmadan sadece zemin loot.",
      },
    ],
  },
  {
    id: "art-gallery",
    name: "Sanat Galerisi",
    district: "Looty Bay — Kültür Bölgesi",
    teaser: "Vitrinlerin arkasında özel koleksiyon odası.",
    wikiUrl: "https://robrunwiki.com/wiki/Art_Gallery",
    secrets: [
      {
        id: "ag-vault",
        title: "Arka Depo Kasası",
        description: "Personel kapısından depo; duvarın ötesinde küçük kasa odası.",
        requiredKey: "Galeri Anahtarı",
        lootTip: "Sessizlik önemli — alarm galeride hızlı çıkar.",
      },
      {
        id: "ag-office",
        title: "Küratör Ofisi",
        description: "Üst katta kilitli ofis; panoların arkasında kasa ipuçları.",
        lootTip: "Yüksek değerli tablolar envanterde yer kaplar; önceliklendir.",
      },
    ],
  },
  {
    id: "grand-hotel",
    name: "Grand Hotel — Depo",
    district: "Looty Bay — Sahil",
    teaser: "Otel arkasındaki depo ve servis tünelleri.",
    secrets: [
      {
        id: "gh-warehouse",
        title: "Ana Depo",
        description: "Servis koridorunun sonunda ana depo; rafların arkası yan oda.",
        requiredKey: "Servis Anahtarı",
        lootTip: "Çoklu çanta gerekir; gıda ve ekipman karışık loot.",
      },
      {
        id: "gh-tunnel",
        title: "Servis Tüneli",
        description: "Mutfak altı tünel otelin yan kanadına bağlanır.",
        lootTip: "Polis yoğunluğu düşükse tünelden kaçış rotası olarak kullan.",
      },
    ],
  },
  {
    id: "strip-club",
    name: "Strip Club — VIP",
    district: "Looty Bay — Eğlence",
    teaser: "VIP bölümü ve gizli ofis duvarların ötesinde.",
    secrets: [
      {
        id: "sc-vip",
        title: "VIP Lounge",
        description: "Perdenin arkası kırmızı koridor; özel kasa ve kilitli dolap.",
        requiredKey: "VIP Kart / Anahtar",
        lootTip: "Gece saatleri daha fazla nakit; gündüz daha sakin loot.",
      },
      {
        id: "sc-safe",
        title: "Yönetici Kasası",
        description: "Ofis duvarında gizli panel; kasayı açmak drill veya kod gerekir.",
        lootTip: "Kod bazen müşteri alanında not olarak görülür (rehberlere bak).",
      },
    ],
  },
  {
    id: "police",
    name: "Polis Merkezi — Cephanelik",
    district: "Looty Bay — Güvenlik",
    teaser: "Arka cephanelik ve kanıt odası yüksek riskli.",
    wikiUrl: "https://metaforge.app/robrun/keys",
    secrets: [
      {
        id: "pd-armory",
        title: "Cephanelik",
        description: "İç koridorun sonunda kilitli cephanelik; duvarın arkasında ek raf.",
        requiredKey: "Polis Anahtarı (nadir)",
        lootTip: "Risk çok yüksek; hızlı giriş-çıkış ve kaçış aracı şart.",
      },
      {
        id: "pd-evidence",
        title: "Kanıt Odası",
        description: "Alt kat mühürlü oda; bazı görev eşyaları burada referanslanır.",
        lootTip: "Çoğu loot legal rehberlerde; hile değil, planlama notu.",
      },
    ],
  },
  {
    id: "bank",
    name: "Banka — Kasa Dairesi",
    district: "Looty Bay — Finans",
    teaser: "Ana kasa ve arka koridor vault.",
    secrets: [
      {
        id: "bank-vault",
        title: "Ana Vault",
        description: "Güvenlik kapısından sonra çoklu kasa odası; duvar içi ikincil kilit.",
        requiredKey: "Banka Kartı + Drill / Termit",
        lootTip: "Ekip koordinasyonu önerilir; solo için küçük kasa hedefi.",
      },
      {
        id: "bank-back",
        title: "Arka Ofis Kasası",
        description: "Müdür odası duvarında daha küçük gizli kasa.",
        lootTip: "Alarm süresi kısaysa önce burayı düşün.",
      },
    ],
  },
  {
    id: "jewelry",
    name: "Kuyumcu",
    district: "Looty Bay — Alışveriş",
    teaser: "Vitrin altı kasa ve arka atölye.",
    secrets: [
      {
        id: "jw-workshop",
        title: "Arka Atölye",
        description: "Showroom arkası atölye kapısı; duvar dolabında ekstra takı kutusu.",
        requiredKey: "Atölye Anahtarı",
        lootTip: "Değer/yoğunluk yüksek; envanter sınırına dikkat.",
      },
      {
        id: "jw-safe",
        title: "Gömülü Kasa",
        description: "Kasa zeminin altı panel veya duvar saatinin arkası.",
        lootTip: "Drill sesi dışarı taşar; timing önemli.",
      },
    ],
  },
  {
    id: "pharmacy",
    name: "Eczane",
    district: "Looty Bay — Mahalle",
    teaser: "Reçete odası ve depo raftı gizli loot noktaları.",
    secrets: [
      {
        id: "ph-storage",
        title: "Soğuk Depo",
        description: "Arka soğutucunun yanında kilitli küçük depo.",
        requiredKey: "Eczacı Anahtarı",
        lootTip: "Medikal loot görevler için; nakit sınırlı.",
      },
      {
        id: "ph-register",
        title: "Kasa Çekmecesi Altı",
        description: "Tezgah altı gizli çekmece (bazı serverlarda mini stash).",
        lootTip: "Hızlı smash-and-grab için uygun, düşük alarm.",
      },
    ],
  },
  {
    id: "casino",
    name: "Kumarhane",
    district: "Looty Bay — Strip",
    teaser: "VIP kumar odası ve sayım ofisi.",
    secrets: [
      {
        id: "cas-vip-room",
        title: "Yüksek Limit Odası",
        description: "Ana salondan gizli merdiven ile üst VIP.",
        requiredKey: "VIP Chip / Anahtar",
        lootTip: "Güvenlik kameraları yoğun; mask ve rota ön hazırlığı.",
      },
      {
        id: "cas-count",
        title: "Sayım Ofisi Kasası",
        description: "Arka ofiste çift kapılı kasa odası.",
        requiredKey: "Yönetici Anahtarı",
        lootTip: "En iyi loot gece event saatleri dışında daha sakin.",
      },
    ],
  },
];