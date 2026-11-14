# Rob Run — Duvar Arkası

Looty Bay için **meşru** gizli oda, kasa ve anahtar rehberi. Hile veya bellek okuma yok — yalnızca elle derlenmiş, oyun içi planlama notları.

## Gereksinimler

- Node.js 18+

## Kurulum ve çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda Vite’ın gösterdiği adresi açın (genelde `http://localhost:5173`).

## Üretim derlemesi

```bash
npm run build
npm run preview
```

## Kullanım

1. Soldan bir bina (POI) seçin.
2. Duvar paneline tıklayarak **duvar arkası** animasyonunu başlatın.
3. Gizli alanları, gerekli anahtarları ve kısa loot ipuçlarını okuyun.

## Veri

POI verileri `src/data/pois.ts` içinde statiktir (9 Looty Bay konumu). Bazı kayıtlarda [robrunwiki.com](https://robrunwiki.com) veya topluluk rehberlerine dış bağlantı vardır.

## Kapsam notu

Bu depo, Rob Run “duvar arkası” MVP’sidir; canlı oyun API’si kullanılmaz.