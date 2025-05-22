import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../shared/models/category.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import '@justinribeiro/lite-youtube';
import {Router} from '@angular/router';
import { ProductCategory } from '../../models/product-category-model';

@Component({
  selector: 'app-customer-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-navbar.component.html',
  styleUrl: './customer-navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerNavbarComponent {
  @Output() categorySelected = new EventEmitter<ProductCategory>();
  @Output() searchTermChanged = new EventEmitter<string>();
  @Input() showVideo!: boolean;
  isMobileMenuOpen = false;
  selectedCategory!: ProductCategory;
  searchTerm: string = '';

  //HARDCODED CATEGORIES
  categories: ProductCategory[] = [
    { id: 1, name: 'Todos los productos' },
    { id: 2, name: 'Ropa' },
    { id: 3, name: 'Mascotas' },
    { id: 4, name: 'Oficina' },
    { id: 5, name: 'Juguetes' },
    { id: 6, name: 'Electrónica' },
    { id: 7, name: 'Hogar' },
    { id: 8, name: 'Deportes' },
    { id: 9, name: 'Videojuegos' },
  ];
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.selectedCategory = this.categories[0];
    this.onCategorySelect(this.selectedCategory);
  }

  onCategorySelect(category: ProductCategory) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

  onSearchTerm() {
    if (this.searchTerm.trim() !== '') {
      this.searchTermChanged.emit(this.searchTerm);
      this.searchTerm = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  redirectVendedor() {
    this.router.navigate(['/vendedor']);
  }

  redirectHome() {
    this.router.navigate(['/productos']);
  }
}
