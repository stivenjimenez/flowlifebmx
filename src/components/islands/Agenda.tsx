import type { Clase } from '../../data/clases';
import styles from './Agenda.module.css';

const ESTADO_CLASS: Record<Clase['estado'], string> = {
  Disponible: styles.disponible,
  'Pocos cupos': styles.pocos,
  Completo: styles.completo,
};

export default function Agenda({ clases }: { clases: Clase[] }) {
  return (
    <>
      <div className={styles.encabezado}>
        <div>
          <div className="fl-kicker">02 / AGENDA DE CLASES</div>
          <h2 className="fl-title">
            Esta semana
            <br />
            se anda.
          </h2>
        </div>
      </div>
      <div className={styles.lista}>
        {clases.map((c) => (
          <div key={`${c.dia}-${c.hora}`} className={styles.clase}>
            <div>
              <div className={styles.dia}>{c.dia}</div>
              <div className={styles.hora}>{c.hora}</div>
            </div>
            <div>
              <div className={styles.lugar}>{c.lugar}</div>
            </div>
            <div className={styles.estado}>
              <div className={`${styles.estadoTexto} ${ESTADO_CLASS[c.estado]}`}>● {c.estado}</div>
            </div>
            {c.estado === 'Completo' ? (
              <span className={styles.lleno}>Completo</span>
            ) : (
              <a href="#contacto" className={styles.reservar}>
                Reservar
              </a>
            )}
          </div>
        ))}
      </div>
      <p className={styles.nota}>* Por lluvia, la clase se reprograma y el cupo no se pierde.</p>
    </>
  );
}
