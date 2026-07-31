export interface Credito {
  nombre: string;
  propia?: boolean; // marca de la casa: se resalta con el acento
}

export interface Red {
  href: string;
  label: string;
}

export interface Episodio {
  id: string; // ID de YouTube: de aquí salen el enlace y la miniatura
  episodio: string; // etiqueta corta, ej. "EP.16"
  invitado: string;
  bajada: string;
}

export const podcast = {
  nombre: 'Ruedelo Podcast',
  logo: '/ruedelo-logo.jpg',
  canal: 'https://www.youtube.com/@Ruedelo_Podcast',
  capitulos: 'https://www.youtube.com/@Ruedelo_Podcast/videos',
  descripcion: [
    'Esto es Ruedelo Podcast. Sumérgete en el mundo del BMX freestyle de la ciudad de Medellín. Únete a nosotros, un grupo de parceros apasionados que llevamos mucho tiempo montando bicicleta, mientras compartimos historias, anécdotas y conocimientos.',
    'En cada episodio te damos una mirada a la escena local de Medellín y del país: vas a escuchar a algunos de los mejores riders de BMX de la ciudad, sus experiencias, sus trucos favoritos, los desafíos que han enfrentado y cómo han dejado su huella en el BMX freestyle.',
    'Historias inspiradoras, momentos de risas y debates apasionados sobre los temas más relevantes del BMX freestyle. Ruedelo Podcast es el lugar donde los que montamos BMX nos reunimos para inspirarnos y conectarnos con la vibrante escena de Medellín. ¡No te pierdas ni un solo episodio!',
  ],
  creditos: [
    { nombre: 'Pola y Pedal' },
    { nombre: 'Flow Life', propia: true },
    { nombre: 'Clant Crew' },
  ] as Credito[],
  redes: [{ href: 'https://www.youtube.com/@Ruedelo_Podcast', label: '↗ YouTube — @Ruedelo_Podcast' }] as Red[],
};

/**
 * Capítulos destacados, en orden de más visto a menos.
 * Para actualizarlos basta con cambiar esta lista: el enlace y la miniatura
 * se derivan del `id` de YouTube.
 */
export const episodios: Episodio[] = [
  {
    id: 'Diz_1W0r_-U',
    episodio: 'EP.16',
    invitado: 'Julián Molina',
    bajada: 'Hace historia en el BMX freestyle con una sola pierna.',
  },
  {
    id: '6zlzPafTQHE',
    episodio: 'EP.10',
    invitado: 'Santiago Laverde',
    bajada: 'Vuelve al país después de cuatro años por fuera.',
  },
  {
    id: '_Qju9nQoU24',
    episodio: 'EP.18',
    invitado: 'Barcelombia',
    bajada: 'El episodio que reúne a toda la banda colombiana del BMX.',
  },
  {
    id: 'ZWrpLBKNO7U',
    episodio: 'EP.13',
    invitado: 'Michael Mogollón',
    bajada: 'De Bogotá a Estados Unidos con el BMX colombiano.',
  },
  {
    id: 'oEt3c45Qh1Y',
    episodio: 'EP.03',
    invitado: 'Andrés Ochoa',
    bajada: 'Uno de los riders que más ha influenciado el BMX callejero local.',
  },
];

export const urlEpisodio = (id: string) => `https://www.youtube.com/watch?v=${id}`;

/** `mqdefault` (320×180) y `maxresdefault` (1280×720) son las variantes 16/9 sin bandas negras. */
export const miniaturaEpisodio = (id: string, calidad: 'mqdefault' | 'maxresdefault') =>
  `https://i.ytimg.com/vi/${id}/${calidad}.jpg`;
