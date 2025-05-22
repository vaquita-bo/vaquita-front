import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { PurchaseGroup } from '../../models/purchase-group-model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,MatCardModule,MatButtonModule,CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input () product!: PurchaseGroup;
}
