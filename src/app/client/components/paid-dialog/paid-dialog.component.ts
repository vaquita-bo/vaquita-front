import { DatePipe, formatDate } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-paid-dialog',
  imports: [MatIconModule, DatePipe],
  templateUrl: './paid-dialog.component.html',
  styleUrl: './paid-dialog.component.css'
})
export class PaidDialogComponent {
  data = inject(MAT_DIALOG_DATA)
  
  today= new Date();
  jstoday = '';
  
  constructor(public dialogRef: MatDialogRef<PaidDialogComponent>){
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  closeSelf(){
    this.dialogRef.close()
  }
}
