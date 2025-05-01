import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div class="header">
      <button class='homebutton' routerLink="/" >VAQUITA</button>
      
        
    </div>
  `,
  styles: `
  .header {
    position: sticky;
    top: 0px;
    background: rgba(0,0,0,.40);
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    box-shadow: 2px 2px 2px 2px #000000;
    margin-bottom: 20px;
    z-index: 100;
  }
  
  `
})
export class HeaderComponent {
}



