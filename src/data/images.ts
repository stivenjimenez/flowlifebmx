export interface ImageItem {
  src?: string; // p. ej. "/images/bmx-01.jpg" cuando exista el asset real
  alt: string;
  label: string; // texto del placeholder mientras no hay src
}

export const profeImages: ImageItem[] = [
  { alt: 'Retrato del profe', label: '[ foto: retrato del profe ]' },
  { alt: 'El profe dando clase', label: '[ dando clase ]' },
  { alt: 'El profe haciendo un truco en el park', label: '[ truco en park ]' },
];

export interface GaleriaImagen extends ImageItem {
  cat: string;
  ratio: string; // aspect-ratio CSS, ej. "4/3"
  orden: number; // posición en la grilla combinada con los videos
}

export const galeriaImages: GaleriaImagen[] = [
  { orden: 2, cat: 'RIDERS', ratio: '4/5', alt: 'Sesión de sábado', label: '[ foto: sesión sábado ]' },
  { orden: 3, cat: 'CLASES', ratio: '4/3', alt: 'Clase inicial en el park', label: '[ foto: clase inicial en park ]' },
  { orden: 6, cat: 'EVENTOS', ratio: '4/3', alt: 'Jam de invierno', label: '[ foto: jam de invierno ]' },
  { orden: 8, cat: 'PROFE', ratio: '4/5', alt: 'Retrato en el bowl', label: '[ foto: retrato en bowl ]' },
  { orden: 9, cat: 'CLASES', ratio: '4/3', alt: 'Grupo del sábado', label: '[ foto: grupo sábado ]' },
];
