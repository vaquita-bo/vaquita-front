import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-entrega',
  templateUrl: './formulario-entrega.component.html',
  styleUrls: ['./formulario-entrega.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormularioEntregaComponent implements OnInit {
  @Input() productoId: number | null = null;
  @Output() formularioCerrado = new EventEmitter<void>();
  @Output() entregaConfirmada = new EventEmitter<any>();

  mostrarModal = true;
  formularioEntrega: FormGroup;

  direcciones = [
    { label: 'Av. América N.º 1234', url: 'https://maps.app.goo.gl/D6ukmc5pvjP9pury7' },
    { label: 'Av. Heroinas N.º 1234', url: 'https://maps.app.goo.gl/D6ukmc5pvjP9pury7' },
    { label: 'Av. Circunvalación N.º 1234', url: 'https://maps.app.goo.gl/D6ukmc5pvjP9pury7' },
    { label: 'Av. Beijing N.º 1234', url: 'https://maps.app.goo.gl/D6ukmc5pvjP9pury7' }
  ];

  dias = ['Lunes', 'Miercoles', 'Viernes'];
  horas = ['10:00 – 11:00', '14:00 – 15:00', '17:00 – 18:00'];

  constructor(private fb: FormBuilder) {
    this.formularioEntrega = this.fb.group({
      direccion: [''],
      dia: [''],
      hora: ['']
    });
  }

  ngOnInit(): void {
    console.log(`Formulario abierto para producto ID: ${this.productoId}`);
  }

  confirmarEntrega() {
    console.log('Datos enviados:', this.formularioEntrega.value);

    const datosEntrega = {
      ...this.formularioEntrega.value,
      productoId: this.productoId
    };

    this.entregaConfirmada.emit(datosEntrega);
  }

  cerrarFormulario() {
    this.formularioCerrado.emit();
  }
}
