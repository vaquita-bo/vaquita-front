import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {VistaProveedor} from '../../models/vista-proveedor.enum';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar-proveedor',
  templateUrl: './navbar-proveedor.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./navbar-proveedor.component.css'],
 })
export class NavbarProveedorComponent {
  @Output() cambioVista:EventEmitter<VistaProveedor> = new EventEmitter<VistaProveedor>();
  dropdownAbierto:boolean = false;

  vistas = [
    { valor: VistaProveedor.misVentas, texto: 'Mis Ventas' },
    { valor: VistaProveedor.vendido, texto: 'Vendidos' },
    { valor: VistaProveedor.enProceso, texto: 'Agendas' }
  ];

  vistaSeleccionada: VistaProveedor = VistaProveedor.misVentas;

  cambiarVista(): void {
    this.cambioVista.emit(this.vistaSeleccionada);
  }

}
