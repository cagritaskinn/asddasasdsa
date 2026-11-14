import type { Poi } from "../data/pois";

type Props = {
  pois: Poi[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function PoiList({ pois, selectedId, onSelect }: Props) {
  return (
    <nav className="poi-list" aria-label="Looty Bay noktaları">
      <h2 className="poi-list__heading">Binalar</h2>
      <ul>
        {pois.map((poi) => (
          <li key={poi.id}>
            <button
              type="button"
              className={`poi-card ${selectedId === poi.id ? "poi-card--active" : ""}`}
              onClick={() => onSelect(poi.id)}
              aria-pressed={selectedId === poi.id}
            >
              <span className="poi-card__name">{poi.name}</span>
              <span className="poi-card__meta">
                {poi.secrets.length} gizli alan · {poi.district}
              </span>
              <span className="poi-card__teaser">{poi.teaser}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}