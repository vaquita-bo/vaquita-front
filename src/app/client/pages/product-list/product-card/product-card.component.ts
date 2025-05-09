import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { PrimaryButtonComponent } from '../../../../shared/components/primary-button/primary-button.component';

import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,MatCardModule,MatButtonModule,CurrencyPipe],
  template: `
    
        <div class="card">
          <img mat-card-image src={{product().image}} />
        <div class="details">
            <p class="name">{{product().name}}</p>
            <p class="price">{{product().price | currency : '': '' }} Bs </p>
        </div>
        
        
        <button mat-raised-button [routerLink]="['/productos', product().id]"
        [state]="{ justProduct : product()}"> Comprar </button>
       
      </div>
    
    `,
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  product = input.required<Product>()

  click = () => {
    toast(JSON.stringify(this.product()));
  }
}
