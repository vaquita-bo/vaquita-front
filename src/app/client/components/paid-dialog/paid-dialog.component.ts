import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-paid-dialog',
  imports: [],
  templateUrl: './paid-dialog.component.html',
  styleUrl: './paid-dialog.component.css'
})
export class PaidDialogComponent {
  data = inject(MAT_DIALOG_DATA)
  constructor(public dialogRef: MatDialogRef<PaidDialogComponent>){
  }

  closeSelf(){
    this.dialogRef.close()
  }
}
