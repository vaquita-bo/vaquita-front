import { Component, inject, OnInit, signal } from '@angular/core';

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import * as lodash from 'lodash'
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  api = inject(ProductService)
  products = signal<lodash.Dictionary<Product[]>>({});
  
  async ngOnInit(){
      const ps = await this.api.getProducts()
      const predicate = (p:Product) => {
          if(p.group) return 'offers';
          return 'regulars';
      }
      this.products.set(lodash.groupBy(ps, predicate));

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
