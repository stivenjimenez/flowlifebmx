import type { ImageItem } from './images';

export interface Rider {
  nombre: string;
  nivel: string;
  antes: string;
  despues: string;
  quote: string;
  media: ImageItem;
}

export const riders: Rider[] = [
  {
    nombre: 'NICO',
    nivel: 'INICIAL → INTERMEDIO',
    antes: 'BUNNY HOP',
    despues: '180 A FAKIE',
    quote: 'Arrancó practicando bunny hop y en pocos meses ya estaba conectando 180 con fakie.',
    media: { alt: 'Progreso de Nico', label: '[ video: progreso de Nico ]' },
  },
  {
    nombre: 'CAMI',
    nivel: 'DESDE CERO',
    antes: 'PRIMERA CLASE',
    despues: 'MANUAL LARGO',
    quote: 'Llegó sin haber tocado una BMX. Hoy baja rampas y sostiene manuales de 10 metros.',
    media: { alt: 'Cami en el park', label: '[ foto: Cami en el park ]' },
  },
  {
    nombre: 'TOMI',
    nivel: 'INTERMEDIO',
    antes: 'MIEDO AL QUARTER',
    despues: 'AIRS Y TRANSFERS',
    quote: 'Trabajamos el miedo paso a paso. Ahora vuela el quarter como si nada.',
    media: { alt: 'Transfer de Tomi', label: '[ clip: transfer de Tomi ]' },
  },
];
