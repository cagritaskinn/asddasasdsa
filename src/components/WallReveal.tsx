import { useCallback, useEffect, useState } from "react";
import type { Poi } from "../data/pois";

type Props = {
  poi: Poi;
  onClose: () => void;
};

export function WallReveal({ poi, onClose }: Props) {
  const [peeled, setPeeled] = useState(false);
  const [peelProgress, setPeelProgress] = useState(0);

  const peel = useCallback(() => {
    if (peeled) return;
    setPeeled(true);
    let frame = 0;
    const tick = () => {
      frame += 1;
      setPeelProgress(Math.min(100, frame * 4));
      if (frame < 25) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [peeled]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <section className="wall-reveal" aria-labelledby="wall-reveal-title">
      <header className="wall-reveal__header">
        <div>
          <h2 id="wall-reveal-title">{poi.name}</h2>
          <p className="wall-reveal__district">{poi.district}</p>
        </div>
        <button type="button" className="btn btn--ghost" onClick={onClose}>
          Listeye dön
        </button>
      </header>

      <p className="wall-reveal__teaser">{poi.teaser}</p>
      {poi.wikiUrl && (
        <a
          className="wall-reveal__wiki"
          href={poi.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiki / rehber →
        </a>
      )}

      <div className="wall-scene">
        <div
          className={`wall-scene__surface ${peeled ? "wall-scene__surface--peeled" : ""}`}
          style={{ ["--peel" as string]: `${peelProgress}%` }}
          onClick={peel}
          onKeyDown={(e) => e.key === "Enter" && peel()}
          role="button"
          tabIndex={0}
          aria-label="Duvarı soyarak gizli içeriği göster"
        >
          <div className="wall-scene__brick" aria-hidden />
          <div className="wall-scene__label">
            {peeled ? "Gizli katman açık" : "Dokun — duvarı soy"}
          </div>
        </div>

        <div
          className={`wall-scene__secrets ${peeled ? "wall-scene__secrets--visible" : ""}`}
        >
          <h3 className="wall-scene__secrets-title">Duvar arkası</h3>
          <ul className="secret-list">
            {poi.secrets.map((s) => (
              <li key={s.id} className="secret-card">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
                {s.requiredKey && (
                  <p className="secret-card__key">
                    <span>Gerekli:</span> {s.requiredKey}
                  </p>
                )}
                <p className="secret-card__tip">
                  <span>İpucu:</span> {s.lootTip}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!peeled && (
        <p className="wall-reveal__hint">
          Duvar paneline tıklayarak «duvar arkası» animasyonunu başlat.
        </p>
      )}
    </section>
  );
}