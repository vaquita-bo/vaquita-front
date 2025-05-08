import {Component, OnInit} from '@angular/core';
import {VistaProveedor} from '../../models/vista-proveedor.enum'
import {NavbarProveedorComponent} from '../navbar-proveedor/navbar-proveedor.component';
import {MisVentasComponent} from './mis-ventas/mis-ventas.component';
import {VendidosComponent} from './vendidos/vendidos.component';
import {AgendasComponent} from './agendas/agendas.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-vista-principal',
  imports: [
    NavbarProveedorComponent,
    MisVentasComponent,
    VendidosComponent,
    AgendasComponent,
    NgIf
  ],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent implements OnInit {
  vistaActual: VistaProveedor = VistaProveedor.misVentas;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVista(vista: VistaProveedor): void {
    this.vistaActual = vista;
  }

  protected readonly VistaProveedor = VistaProveedor;
}
