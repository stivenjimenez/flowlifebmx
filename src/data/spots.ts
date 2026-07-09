export interface Spot {
  nombre: string;
  nivel: string;
  ideal: string;
  dias: string;
}

export const spots: Spot[] = [
  { nombre: 'SKATEPARK PALERMO', nivel: 'INICIAL / INTERMEDIO', ideal: 'Rampas, quarters, transfers suaves. Ideal para arrancar.', dias: 'MARTES Y VIERNES' },
  { nombre: 'SPOT CALLEJERO CENTRO', nivel: 'INTERMEDIO / AVANZADO', ideal: 'Street puro: manual pads, rails, gaps.', dias: 'JUEVES' },
  { nombre: 'SKATEPARK COSTANERA', nivel: 'TODOS LOS NIVELES', ideal: 'Park amplio con zonas separadas por nivel.', dias: 'SÁBADO' },
  { nombre: 'BOWL MUNICIPAL', nivel: 'INTERMEDIO', ideal: 'Bowl profundo, transiciones y carve.', dias: 'SÁBADO TARDE' },
];
