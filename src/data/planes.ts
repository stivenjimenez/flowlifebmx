export interface Plan {
  nombre: string;
  para: string;
  precio: string;
  unidad: string;
  destacado: boolean;
  incluye: string[];
  cta: string;
}

export const planes: Plan[] = [
  {
    nombre: 'CLASE INDIVIDUAL',
    para: 'Atención personalizada',
    precio: '$25',
    unidad: '/ CLASE',
    destacado: false,
    incluye: ['1 hora de clase', 'Corrección técnica', 'Objetivo personalizado'],
    cta: 'Reservar',
  },
  {
    nombre: 'CLASE GRUPAL',
    para: 'Aprender en comunidad',
    precio: '$15',
    unidad: '/ CLASE',
    destacado: false,
    incluye: ['Clase compartida', 'Ejercicios por nivel', 'Progresión guiada'],
    cta: 'Reservar',
  },
  {
    nombre: 'PACK MENSUAL',
    para: 'Para riders constantes',
    precio: '$50',
    unidad: '/ MES',
    destacado: true,
    incluye: ['4 clases al mes', 'Seguimiento personal', 'Recomendaciones de práctica'],
    cta: 'Quiero el pack',
  },
  {
    nombre: 'PREGRABADAS',
    para: 'Practica donde sea',
    precio: '$10',
    unidad: '/ MES',
    destacado: false,
    incluye: ['Acceso a videos', 'Tutoriales por nivel', 'Ejercicios técnicos'],
    cta: 'Próximamente',
  },
];
