import { Component, OnInit } from '@angular/core';
import { PurchaseGroupService } from '../../services/purchase-group.service';
import { PurchaseGroup } from '../../models/purchase-group-model';
import { CommonModule } from '@angular/common';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { ProductCategory } from '../../models/product-category-model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CustomerNavbarComponent, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  purchaseGroupList: PurchaseGroup[] = [];
  filteredPurchaseGroup: PurchaseGroup[] = [];
  selectedCategory!: ProductCategory;
  searchTerm: string = '';
 
  constructor(private purchaseGroupService: PurchaseGroupService) {}

  ngOnInit() {
    this.purchaseGroupService.getProducts().subscribe((data: PurchaseGroup[]) => {
      this.purchaseGroupList = data;
      this.filteredPurchaseGroup = data;
    });
  }

  onCategorySelected(category: ProductCategory) {
    this.selectedCategory = category;
    this.searchTerm = '';
    this.filterByCategory();
  }

  onSearchTermChanged(term: string) {
    this.searchTerm = term;
    this.filterBySearchTerm();
  }
  
  filterByCategory() {
    if (this.selectedCategory.id !== 1) {
      this.filteredPurchaseGroup = this.purchaseGroupList.filter(group => group.productCategory === this.selectedCategory.name);
    }else{
      this.filteredPurchaseGroup = this.purchaseGroupList;
    }
  }

  filterBySearchTerm() {
    if (this.searchTerm.trim() !== '') {
      this.filteredPurchaseGroup = this.purchaseGroupList.filter(group =>
        group.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
