import { useMemo, useState } from "react";
import { LOOTY_BAY_POIS } from "./data/pois";
import { PoiList } from "./components/PoiList";
import { WallReveal } from "./components/WallReveal";

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => LOOTY_BAY_POIS.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__eyebrow">Rob Run · Looty Bay</span>
          <h1>Duvar Arkası</h1>
          <p className="site-header__tagline">
            Meşru gizli odalar, kasalar ve anahtarlar — hile yok, sadece
            rehber.
          </p>
        </div>
        <div className="site-header__badge" title="Yalnızca oyun içi bilgi">
          v0 MVP
        </div>
      </header>

      <main className="layout">
        <aside className="layout__sidebar">
          <PoiList
            pois={LOOTY_BAY_POIS}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </aside>
        <div className="layout__main">
          {selected ? (
            <WallReveal poi={selected} onClose={() => setSelectedId(null)} />
          ) : (
            <section className="empty-state">
              <div className="empty-state__wall" aria-hidden />
              <h2>Önce bir bina seç</h2>
              <p>
                Soldan bir POI seç; ardından duvar panelini soyarak gizli
                odaları ve loot ipuçlarını gör.
              </p>
              <p className="empty-state__count">
                {LOOTY_BAY_POIS.length} konum listeleniyor
              </p>
            </section>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <p>
          Veriler elle derlenmiştir; resmi API yoktur.{" "}
          <a
            href="https://robrunwiki.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            robrunwiki.com
          </a>{" "}
          ve topluluk rehberleri referans alınabilir.
        </p>
      </footer>
    </div>
  );
}