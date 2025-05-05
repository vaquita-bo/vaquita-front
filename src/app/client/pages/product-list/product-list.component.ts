import { Component, inject, OnInit, signal } from '@angular/core';

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import * as lodash from 'lodash'
import { Product } from '../../../shared/models/product.model';
import { BannerComponent } from "../../components/banner/banner.component";
import { MatChipsModule } from '@angular/material/chips';
import { MatFabButton } from '@angular/material/button';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, BannerComponent, MatFabButton,MatChipsModule],
  templateUrl: './product-list.component.html',
  styles: `
  section#video {
      display: flex;
      flex-direction: column;
      margin: auto;
      align-items: center;
    }
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
  }

  `
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
