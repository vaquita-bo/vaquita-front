import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Progreso {
  actual: number;
  total: number;
}

export interface Entrega {
  lugar: string;
  mapa: string;
  fecha: string;
  hora: string;
}

export interface Producto {
  id: number;
  titulo: string;
  precioTotal: number;
  inicioOferta: string;
  finOferta: string;
  descripcion: string;
  imagen: string;
  progreso: Progreso;
}

export interface ProductoVendido extends Producto {
  fechaVenta: string;
}

export interface ProductoAgendado extends ProductoVendido {
  entrega: Entrega;
}

export interface DatosProductos {
  productosVendidos: ProductoVendido[];
  productos: Producto[];
  productosAgendados: ProductoAgendado[];
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datosUrl = 'assets/data/productos.json';
  constructor(private http: HttpClient) { }

  getDatos(): Observable<DatosProductos> {
    return this.http.get<DatosProductos>(this.datosUrl);
  }

  getProductosVendidos(): Observable<ProductoVendido[]> {
    return this.getDatos().pipe(
      map(datos => datos.productosVendidos)
    );
  }

  getProductos(): Observable<Producto[]> {
    return this.getDatos().pipe(
      map(datos => datos.productos)
    );
  }

  getProductosAgendados(): Observable<ProductoAgendado[]> {
    return this.getDatos().pipe(
      map(datos => datos.productosAgendados)
    );
  }
}
