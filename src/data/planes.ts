export interface Plan {
  nombre: string;
  precio: string;
  incluye: string[];
}

export const planes: Plan[] = [
  {
    nombre: 'CLASE INDIVIDUAL',
    precio: '$55.000',
    incluye: ['1 hora y media de clase', 'Entrenamiento físico y técnico', 'Objetivo personalizado'],
  },
  {
    nombre: 'CLASE GRUPAL',
    precio: '$30.000',
    incluye: ['1 hora y media de clase compartida', 'Entrenamiento físico y técnico por niveles', 'Progresión guiada'],
  },
];
