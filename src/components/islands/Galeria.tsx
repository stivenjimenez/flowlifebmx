import { useEffect, useState } from 'react';
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
  youtube?: string;
  instagram?: string;
}

const PlayIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M7 3.5v17L20 12z" /></svg>;

const tituloDe = (item: GaleriaItem) => item.label.replace(/^\[ | \]$/g, '');

export default function Galeria({ items }: { items: GaleriaItem[] }) {
  const [modal, setModal] = useState<GaleriaItem | null>(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  return (
    <>
      <div className={styles.encabezado}>
        <div>
          <div className="fl-kicker">GALERÍA</div>
          <h2 className="fl-title">
            Fotos y clips
            <br />
            de la comunidad.
          </h2>
        </div>
      </div>
      <div className={styles.grid}>
        {items.map((g) => g.instagram ? (
          <a key={g.orden} className={styles.item} style={{ aspectRatio: g.ratio }} href={g.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${g.label} (abre en otra pestaña)`}>
            <img className={styles.miniatura} src={g.src} alt="" loading="lazy" />
            {g.esVideo && <span className={styles.play} aria-hidden="true"><PlayIcon /></span>}
          </a>
        ) : g.youtube ? (
          <a key={g.orden} className={`${styles.item} ${styles.video} ${['https://www.youtube.com/watch?v=IKEEv-lLFi8', 'https://www.youtube.com/watch?v=6NSYXm5-09g'].includes(g.youtube) ? styles.ocultoEnMovil : ''}`} style={{ aspectRatio: '16/9' }} href={g.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${g.label} en YouTube (abre en otra pestaña)`}>
            <img className={styles.miniatura} src={g.poster} alt="" loading="lazy" />
            <span className={styles.play} aria-hidden="true"><PlayIcon /></span>
          </a>
        ) : (
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
                <span className={styles.itemLabel}>{g.label}</span>
              </span>
            )}
          </button>
        ))}
      </div>
      {modal && (
        <div className={styles.overlay} role="dialog" aria-modal="true" onClick={() => setModal(null)}>
          <div className={styles.caja} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.cerrar} aria-label="Cerrar" onClick={() => setModal(null)}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
