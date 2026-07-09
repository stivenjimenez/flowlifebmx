import { useState } from 'react';
import type { Clase } from '../../data/clases';
import FilterChips from './FilterChips';
import styles from './Agenda.module.css';

const NIVELES = ['TODOS', 'INICIAL', 'INTERMEDIO', 'AVANZADO'];

const ESTADO_CLASS: Record<Clase['estado'], string> = {
  Disponible: styles.disponible,
  'Pocos cupos': styles.pocos,
  Completo: styles.completo,
};

export default function Agenda({ clases }: { clases: Clase[] }) {
  const [nivel, setNivel] = useState('TODOS');

  const visibles = clases.filter((c) => nivel === 'TODOS' || c.nivel === nivel || c.nivel === 'TODOS');

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
        <FilterChips opciones={NIVELES} activo={nivel} onCambio={setNivel} />
      </div>
      <div className={styles.lista}>
        {visibles.map((c) => (
          <div key={`${c.dia}-${c.hora}`} className={styles.clase}>
            <div>
              <div className={styles.dia}>{c.dia}</div>
              <div className={styles.hora}>{c.hora}</div>
            </div>
            <div className={styles.nivel}>
              <span className={styles.nivelTag}>{c.nivel}</span>
            </div>
            <div>
              <div className={styles.lugar}>{c.lugar}</div>
              <div className={styles.tipo}>{c.tipo}</div>
            </div>
            <div className={styles.estado}>
              <div className={`${styles.estadoTexto} ${ESTADO_CLASS[c.estado]}`}>● {c.estado}</div>
              <div className={styles.cupos}>{c.cupos}</div>
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
