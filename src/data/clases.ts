export type EstadoClase = 'Disponible' | 'Pocos cupos' | 'Completo';

export interface Clase {
  dia: string;
  hora: string;
  lugar: string;
  estado: EstadoClase;
}

export const clases: Clase[] = [
  { dia: 'MARTES', hora: '17:00', lugar: 'Skatepark Palermo', estado: 'Disponible' },
  { dia: 'JUEVES', hora: '18:30', lugar: 'Spot callejero Centro', estado: 'Pocos cupos' },
  { dia: 'VIERNES', hora: '17:30', lugar: 'Skatepark Palermo', estado: 'Completo' },
  { dia: 'SÁBADO', hora: '10:00', lugar: 'Skatepark Costanera', estado: 'Disponible' },
  { dia: 'SÁBADO', hora: '15:00', lugar: 'Bowl Municipal', estado: 'Disponible' },
];
