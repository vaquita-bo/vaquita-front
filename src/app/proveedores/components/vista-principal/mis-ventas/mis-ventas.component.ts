import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatosService, Producto} from '../../../services/datos.service';

@Component({
  selector: 'app-mis-ventas',
  imports: [CommonModule],
  templateUrl: './mis-ventas.component.html',
  standalone: true,
  styleUrl: './mis-ventas.component.css'
})
export class MisVentasComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.datosService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  readonly CIRCUNFERENCIA = 2 * Math.PI * 20;


  calcularPorcentaje(actual: number, total: number): number {
    if (total <= 0) {
      return 0;
    }
    return Math.min(100, (actual / total) * 100);
  }
}
