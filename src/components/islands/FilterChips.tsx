import styles from './FilterChips.module.css';

interface Props {
  opciones: string[];
  activo: string;
  onCambio: (opcion: string) => void;
}

export default function FilterChips({ opciones, activo, onCambio }: Props) {
  return (
    <div className={styles.chips}>
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={opcion === activo ? `${styles.chip} ${styles.activo}` : styles.chip}
          onClick={() => onCambio(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}
