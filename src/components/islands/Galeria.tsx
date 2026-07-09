import { useEffect, useState } from 'react';
import FilterChips from './FilterChips';
import styles from './Galeria.module.css';

export interface GaleriaItem {
  cat: string;
  label: string;
  ratio: string;
  orden: number;
  esVideo: boolean;
  src?: string;
  alt?: string;
  poster?: string;
}

const CATEGORIAS = ['TODO', 'PROFE', 'RIDERS', 'CLASES', 'TRUCOS', 'STREET', 'EVENTOS'];

const tituloDe = (item: GaleriaItem) => item.label.replace(/^\[ | \]$/g, '');

export default function Galeria({ items }: { items: GaleriaItem[] }) {
  const [cat, setCat] = useState('TODO');
  const [modal, setModal] = useState<GaleriaItem | null>(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  const visibles = items.filter((g) => cat === 'TODO' || g.cat === cat);

  return (
    <>
      <div className={styles.encabezado}>
        <div>
          <div className="fl-kicker">04 / GALERÍA</div>
          <h2 className="fl-title">
            Fotos y clips
            <br />
            de la comunidad.
          </h2>
        </div>
        <FilterChips opciones={CATEGORIAS} activo={cat} onCambio={setCat} />
      </div>
      <div className={styles.grid}>
        {visibles.map((g) => (
          <button
            key={g.orden}
            type="button"
            className={styles.item}
            style={{ aspectRatio: g.ratio }}
            onClick={() => setModal(g)}
          >
            {g.src ? (
              <img className={styles.miniatura} src={g.src} alt={g.alt ?? tituloDe(g)} />
            ) : (
              <span className={styles.itemInfo}>
                <span className={styles.itemCat}>{g.cat}</span>
                <span className={styles.itemLabel}>{g.label}</span>
              </span>
            )}
            {g.esVideo && <span className={styles.badge}>▶ VIDEO</span>}
          </button>
        ))}
      </div>
      {modal && (
        <div className={styles.overlay} role="dialog" aria-modal="true" onClick={() => setModal(null)}>
          <div className={styles.caja} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.cerrar} aria-label="Cerrar" onClick={() => setModal(null)}>
              ✕
            </button>
            <div className={styles.media}>
              {modal.src ? (
                modal.esVideo ? (
                  <video src={modal.src} poster={modal.poster} controls playsInline />
                ) : (
                  <img src={modal.src} alt={modal.alt ?? tituloDe(modal)} />
                )
              ) : (
                <span className={styles.mediaLabel}>{modal.label}</span>
              )}
            </div>
            <div className={styles.pie}>
              <span className={styles.titulo}>{tituloDe(modal)}</span>
              <span className={styles.pieCat}>{modal.cat}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
