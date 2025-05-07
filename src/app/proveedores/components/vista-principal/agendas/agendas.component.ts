import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatosService, ProductoAgendado } from '../../../services/datos.service';
import {FormularioEntregaComponent} from '../../../forms/formulario-entrega/formulario-entrega.component';

@Component({
  selector: 'app-agendas',
  imports: [CommonModule, HttpClientModule, FormularioEntregaComponent],
  templateUrl: './agendas.component.html',
  standalone: true,
  styleUrl: './agendas.component.css'
})
export class AgendasComponent implements OnInit {
  productosAgendados: ProductoAgendado[] = [];
  mostrarFormularioEntrega = false;
  productoSeleccionadoId: number | null = null;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.cargarProductosAgendados();
  }

  cargarProductosAgendados(): void {
    this.datosService.getProductosAgendados().subscribe({
      next: (productos) => {
        this.productosAgendados = productos;
      },
      error: (err) => {
        console.error('Error al cargar productos agendados:', err);
      }
    });
  }

  cambiarEntrega(productoId: number) {
    console.log(`Cambiando entrega para producto ID: ${productoId}`);
    this.productoSeleccionadoId = productoId;
    this.mostrarFormularioEntrega = true;
  }

  abrirMapa(url: string) {
    window.open(url, '_blank');
  }

  onFormularioCerrado() {
    this.mostrarFormularioEntrega = false;
    this.productoSeleccionadoId = null;
  }

  onEntregaConfirmada(datosEntrega: any) {
    // Aquí podrías llamar a un servicio para actualizar la entrega
    console.log(`Entrega confirmada para producto ID: ${this.productoSeleccionadoId}`, datosEntrega);

    // Opcional: recargar los productos para ver los cambios
    this.cargarProductosAgendados();

    // Cerrar el formulario
    this.mostrarFormularioEntrega = false;
    this.productoSeleccionadoId = null;
  }
}
