import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosService, ProductoVendido } from '../../../services/datos.service';
import {FormularioEntregaComponent} from '../../../forms/formulario-entrega/formulario-entrega.component';

@Component({
  selector: 'app-vendidos',
  imports: [CommonModule, FormularioEntregaComponent],
  templateUrl: './vendidos.component.html',
  standalone: true,
  styleUrl: './vendidos.component.css'
})
export class VendidosComponent implements OnInit {
  productosVendidos: ProductoVendido[] = [];
  mostrarFormularioEntrega = false;
  productoSeleccionadoId: number | null = null;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.cargarProductosVendidos();
  }

  cargarProductosVendidos(): void {
    this.datosService.getProductosVendidos().subscribe({
      next: (productos) => {
        this.productosVendidos = productos;
      },
      error: (err) => {
        console.error('Error al cargar productos vendidos:', err);
      }
    });
  }

  agendarEntrega(productoId: number) {
    console.log(`Agendando entrega para producto ID: ${productoId}`);
    this.productoSeleccionadoId = productoId;
    this.mostrarFormularioEntrega = true;
  }

  onFormularioCerrado() {
    this.mostrarFormularioEntrega = false;
    this.productoSeleccionadoId = null;
  }

  onEntregaConfirmada(datosEntrega: any) {
    // Aquí podrías llamar a un servicio para registrar la entrega
    console.log(`Entrega agendada para producto ID: ${this.productoSeleccionadoId}`, datosEntrega);

    // Opcional: Actualizar la lista de productos vendidos
    this.cargarProductosVendidos();

    // Cerrar el formulario
    this.mostrarFormularioEntrega = false;
    this.productoSeleccionadoId = null;
  }
}
