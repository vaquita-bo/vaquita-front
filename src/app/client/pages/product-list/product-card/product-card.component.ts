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
    
        <mat-card appearance="outlined" [routerLink]="['/product', product().id]"
          [state]="{ justProduct : product()}">
        @if (product().group){
          <!-- TODO replace number of participants by goal-participants -->
            <span class="waiting text-orange">
              Esperando a {{product().group?.participants }} más
          </span>
        }
          <img mat-card-image src={{product().image}} />
        <div class="details">
            <p class="name">{{product().name}}</p>
            <p class="price">{{product().price | currency : '': '' }} Bs </p>
        </div>
        
        <span class="stock" 
             [class]="product().stock ? 'text-green' : 'text-red'"> 
            @if (product().stock) {
               Quedan {{product().stock}} 
            } @else { Agotado }
        </span>
        @if(product().group){
            <!-- TODO: Use current time and update counter every second -->
            <span class="timeleft text-red"> 
                3:00:23
            </span>
        }
        <mat-card-actions align="end">
          <button mat-raised-button> Comprar </button>
        </mat-card-actions>
        </mat-card>
    
    `,
  styles: `
  
  .details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .waiting{
    margin-top: 40px;
    position: absolute;
    

    font-style: italic;
    font-size:20px;
  }
  .stock {
    align-self: flex-end;
    position: absolute;
    margin-right: 16px;
    
    text-align: right;
    font-weight: bold;
    padding: .5em 0.2em;
    border-radius: 1em;
  }

  .timeleft {
      color: white;
      align-self: flex-start;
      position: absolute;
      margin-top:100px;
      text-align: right;
      font-weight: bold;
      padding: .5em;
      border-radius: 1em;
    }
    section#video {
      display: flex;
      flex-direction: column;
      margin: auto;
      align-items: center;
    }
  `
})
export class ProductCardComponent {
  
  product = input.required<Product>()

  click = () => {
    toast(JSON.stringify(this.product()));
  }
}
