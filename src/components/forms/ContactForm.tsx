import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

interface FormValues {
  nombre: string;
  edad: string;
  nivel: string;
  zona: string;
  dia: string;
  bici: string;
  aprender: string;
  whatsapp: string;
  mensaje: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (datos: FormValues) => {
    // TODO: integrar backend (API propia, email o WhatsApp)
    console.log('Reserva recibida', datos);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className={styles.exito}>
        <div className={styles.exitoTitulo}>¡LISTO!</div>
        <p className={styles.exitoTexto}>
          Recibimos tu mensaje. Te escribimos por WhatsApp en las próximas horas para coordinar tu clase.
        </p>
        <button
          type="button"
          className={styles.otro}
          onClick={() => {
            reset();
            setEnviado(false);
          }}
        >
          Enviar otro
        </button>
      </div>
    );
  }

  const hayErrores = Boolean(errors.nombre || errors.nivel || errors.whatsapp);
  const claseInput = (conError: boolean) => (conError ? `${styles.input} ${styles.invalido}` : styles.input);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>NOMBRE *</span>
        <input className={claseInput(!!errors.nombre)} {...register('nombre', { required: true })} />
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>EDAD</span>
        <input className={styles.input} type="number" {...register('edad')} />
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>NIVEL *</span>
        <select className={claseInput(!!errors.nivel)} {...register('nivel', { required: true })}>
          <option value="">Elegir…</option>
          <option>Nunca anduve</option>
          <option>Inicial</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>ZONA</span>
        <input className={styles.input} {...register('zona')} />
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>DÍA DISPONIBLE</span>
        <select className={styles.input} {...register('dia')}>
          <option value="">Cualquiera</option>
          <option>Martes</option>
          <option>Jueves</option>
          <option>Sábado</option>
        </select>
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>¿TIENES BICI?</span>
        <select className={styles.input} {...register('bici')}>
          <option>Sí</option>
          <option>No</option>
        </select>
      </label>
      <label className={`${styles.campo} ${styles.campoFull}`}>
        <span className={styles.etiqueta}>¿QUÉ QUIERES APRENDER?</span>
        <input
          className={styles.input}
          placeholder="Bunny hop, manual, 180, perder el miedo…"
          {...register('aprender')}
        />
      </label>
      <label className={styles.campo}>
        <span className={styles.etiqueta}>WHATSAPP *</span>
        <input className={claseInput(!!errors.whatsapp)} {...register('whatsapp', { required: true })} />
      </label>
      <label className={`${styles.campo} ${styles.campoFull}`}>
        <span className={styles.etiqueta}>MENSAJE</span>
        <textarea className={styles.input} rows={3} {...register('mensaje')} />
      </label>
      {hayErrores && <div className={styles.error}>✕ Completa nombre, nivel y WhatsApp para reservar.</div>}
      <button type="submit" className={styles.enviar}>
        Reservar mi primera clase
      </button>
    </form>
  );
}
