import { Component, input, output } from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-primary-button',
  imports: [MatButton],
  template: `
    <button mat-raised-button extended (click)="click($event)">
        {{ label() }}
    </button>
  `,
  styles: `
  
  `
})
export class PrimaryButtonComponent {
    label = input('');
    stop = input(false);
    btnClicked = output();

    click = (event:Event) => {
        if(this.stop()) event.stopPropagation();
        this.btnClicked.emit();
    }
}
