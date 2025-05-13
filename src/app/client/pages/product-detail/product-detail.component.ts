import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from "../../../shared/models/product.model";
import { CommonModule } from '@angular/common';
import { PaymentDialogComponent } from '../../components/payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PaidDialogComponent } from '../../components/paid-dialog/paid-dialog.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product | undefined;
  
  constructor(public dialog: MatDialog){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  openPaymentDialog(){
    let dialogRef = this.dialog.open(
      PaymentDialogComponent, {data: { 
        product: this.product
      }});
    dialogRef.afterClosed().subscribe(result =>{
      if(result===true){
        this.openPaidDialog();
      }
    })
  }

  openPaidDialog(){
    let dialogRef = this.dialog.open(
      PaidDialogComponent, {
        data: {
          product: this.product
        }
      }
    );
  }
}
