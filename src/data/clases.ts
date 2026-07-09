export type NivelClase = 'INICIAL' | 'INTERMEDIO' | 'AVANZADO' | 'TODOS';
export type EstadoClase = 'Disponible' | 'Pocos cupos' | 'Completo';

export interface Clase {
  dia: string;
  hora: string;
  lugar: string;
  tipo: string;
  nivel: NivelClase;
  cupos: string;
  estado: EstadoClase;
}

export const clases: Clase[] = [
  { dia: 'MARTES', hora: '17:00', lugar: 'Skatepark Palermo', tipo: 'Clase grupal · Park', nivel: 'INICIAL', cupos: '5 CUPOS', estado: 'Disponible' },
  { dia: 'JUEVES', hora: '18:30', lugar: 'Spot callejero Centro', tipo: 'Clase grupal · Street', nivel: 'INTERMEDIO', cupos: '2 CUPOS', estado: 'Pocos cupos' },
  { dia: 'VIERNES', hora: '17:30', lugar: 'Skatepark Palermo', tipo: 'Clase individual · Técnica', nivel: 'AVANZADO', cupos: '—', estado: 'Completo' },
  { dia: 'SÁBADO', hora: '10:00', lugar: 'Skatepark Costanera', tipo: 'Clase grupal · Todos los niveles', nivel: 'TODOS', cupos: '8 CUPOS', estado: 'Disponible' },
  { dia: 'SÁBADO', hora: '15:00', lugar: 'Bowl Municipal', tipo: 'Clase grupal · Bowl', nivel: 'INTERMEDIO', cupos: '4 CUPOS', estado: 'Disponible' },
];
