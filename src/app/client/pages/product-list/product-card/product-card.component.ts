import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { PrimaryButtonComponent } from '../../../../shared/components/primary-button/primary-button.component';

import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    
        <div class="card" [routerLink]="['/product', product().id]"
          [state]="{ justProduct : product()}">
        @if (product().group){
          <!-- TODO replace number of participants by goal-participants -->
            <span class="waiting text-orange">
              Esperando a {{product().group?.participants }} más
          </span>
        }
          <img src={{product().image}} />
        <div class="details">
            <p class="name">{{product().name}}</p>
            <p class="price">{{product().price}} Bs</p>
        </div>
        
       
            <app-primary-button label="Añadir al carro" 
              (btnClicked)="click()"
              [stop]="true"
            />
        
        
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
        </div>
    
    `,
  styles: `
  .card {
    background-color: white;
    min-width: 150px;
    border-radius: 30px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  `
})
export class ProductCardComponent {
  product = input.required<Product>()

  click = () => {
    toast(JSON.stringify(this.product()));
  }
}
