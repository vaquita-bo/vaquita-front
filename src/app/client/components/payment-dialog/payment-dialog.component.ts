import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payment-dialog',
  imports: [MatDialogModule,MatButtonModule,MatIconModule],
  templateUrl: './payment-dialog.component.html',
  styleUrl: './payment-dialog.component.css'
})
export class PaymentDialogComponent {
  data = inject(MAT_DIALOG_DATA)
  constructor(public dialogRef: MatDialogRef<PaymentDialogComponent>){

  }

  onPaidButton(){
    this.dialogRef.close()
  }
  closeSelf(){
    this.dialogRef.close()
  }
}
