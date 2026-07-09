export interface VideoItem {
  src?: string; // p. ej. "/videos/session-01.mp4" cuando exista el asset real
  poster?: string;
  title: string;
  label: string; // texto del placeholder mientras no hay src
}

export const heroVideo: VideoItem = {
  title: 'Profe andando en skatepark',
  label: '[ video loop: profe andando\nen skatepark ]',
};

export interface GaleriaVideo extends VideoItem {
  cat: string;
  ratio: string; // aspect-ratio CSS, ej. "4/3"
  orden: number; // posición en la grilla combinada con las fotos
}

export const galeriaVideos: GaleriaVideo[] = [
  { orden: 1, cat: 'PROFE', ratio: '4/3', title: 'Tailwhip en quarter', label: '[ clip: tailwhip en quarter ]' },
  { orden: 4, cat: 'TRUCOS', ratio: '4/5', title: 'Primer 180 de Nico', label: '[ clip: primer 180 de Nico ]' },
  { orden: 5, cat: 'STREET', ratio: '4/3', title: 'Manual pad centro', label: '[ clip: manual pad centro ]' },
  { orden: 7, cat: 'RIDERS', ratio: '4/3', title: 'Progreso de Cami', label: '[ clip: progreso de Cami ]' },
  { orden: 10, cat: 'EVENTOS', ratio: '4/3', title: 'Best trick jam', label: '[ clip: best trick jam ]' },
];
