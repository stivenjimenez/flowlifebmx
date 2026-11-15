export interface VideoItem {
  src?: string; // p. ej. "/videos/session-01.mp4" cuando exista el asset real
  webm?: string;
  poster?: string;
  title: string;
  label: string; // texto del placeholder mientras no hay src
}

export const heroVideo: VideoItem = {
  src: '/hero-optimizado.mp4',
  webm: '/hero-optimizado.webm',
  title: 'Profe andando en skatepark',
  label: '[ video loop: profe andando\nen skatepark ]',
};

export interface GaleriaVideo extends VideoItem {
  youtube: string;
  cat: string;
  ratio: string; // aspect-ratio CSS, ej. "4/3"
  orden: number; // posición en la grilla combinada con las fotos
}

const videosProfe = ['o1U5XIiSXaE', 'K1RGNhwFgf4', 'mdAZXiEeAIU', 'mGFWu0u-0wM', 'ONQVXhG8tU0', '-6PGoqZUJko', 'WzawR0SY2k0', 'zh8Lnew8sfs', 'IKEEv-lLFi8', '6NSYXm5-09g'];

export const galeriaVideos: GaleriaVideo[] = videosProfe.map((id, index) => ({
  orden: [1, 4, 5, 7, 10, 11, 12, 13, 14, 15][index],
  cat: 'PROFE',
  ratio: '4/3',
  title: `Video del profe ${index + 1}`,
  label: `Video del profe ${index + 1}`,
  youtube: `https://www.youtube.com/watch?v=${id}`,
  poster: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
}));
