import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster, HeaderComponent],
  template: `
    <ngx-sonner-toaster 
      position="top-center" richColors
      [expand]="true"
      visibleToasts="3"  
      closeButton="close"
      duration="5000"
      offset="100px" 
    />
    <app-header />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'vaquita-front';
}
