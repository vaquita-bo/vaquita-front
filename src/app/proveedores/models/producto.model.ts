export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  estado: 'disponible' | 'vendido' | 'agendado';
  fechaEntrega?: Date;
}
