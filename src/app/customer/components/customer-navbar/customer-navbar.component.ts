import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../../shared/models/category.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-navbar.component.html',
  styleUrl: './customer-navbar.component.css'
})
export class CustomerNavbarComponent {
  @Output() categorySelected = new EventEmitter<number>();
  @Output() searchTermChanged = new EventEmitter<string>();
  selectedCategoryId: number = 1;
  searchTerm: string = '';

  //HARDCODED CATEGORIES
  categories: Category[] = [
    { id: 1, name: 'Todos lo productos' },
    { id: 2, name: 'Ropa' },
    { id: 3, name: 'Mascotas' },
    { id: 4, name: 'Oficina' },
    { id: 5, name: 'Juguetes' },
    { id: 6, name: 'Electrónica' },
    { id: 7, name: 'Hogar' },
    { id: 8, name: 'Deportes' },
    { id: 9, name: 'Videojuegos' },
  ];

  onCategorySelect(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }

  onSearchTerm() {
    if (this.searchTerm.trim() !== '') {
      this.searchTermChanged.emit(this.searchTerm);
      this.searchTerm = '';
    }
  }
  

  


}
