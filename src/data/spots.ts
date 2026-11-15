export interface Spot {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  mapa?: string;
  ruta?: string;
}

export const spots: Spot[] = [
  { nombre: 'CIUDAD DEL RÍO', descripcion: 'Un bowl al aire libre en el parque de Ciudad del Río.', ubicacion: 'Skate bowl Ciudad del Rio, Medellín, Colombia' },
  { nombre: 'CUATRO SUR', descripcion: 'Parque de ruedas cubierto bajo el puente de la 4 Sur.', ubicacion: 'Skatepark del Puente de la 4 Sur, Medellín, Colombia' },
  { nombre: 'CASTILLA', descripcion: 'Un lugar para rodar en Castilla.', ubicacion: 'Castilla, Medellín, Colombia', mapa: 'https://maps.google.com/maps?cid=3826554921204586478&output=embed', ruta: 'https://www.google.com/maps?cid=3826554921204586478' },
  { nombre: 'ESTADIO', descripcion: 'Skatepark de la unidad deportiva Atanasio Girardot.', ubicacion: '6.2544631,-75.5885036' },
  { nombre: 'SANTA LUCÍA', descripcion: 'Skatepark de barrio cerca de la estación Santa Lucía.', ubicacion: 'Skatepark Santa Lucia, Calle 47B 89-37, Medellín, Colombia' },
];
