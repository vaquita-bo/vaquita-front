import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CustomerNavbarComponent } from '../../customer/components/customer-navbar/customer-navbar.component';
import { filter } from 'rxjs';
@Component({
  selector: 'app-customer-layout',
  imports: [CustomerNavbarComponent,RouterOutlet],
  template:` 
    <app-customer-navbar [showVideo]='showVideoBanner'/>
    <router-outlet />
  `
})
export class CustomerLayoutComponent {
  showVideoBanner:boolean=false;
  constructor(private router:Router){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showVideoBanner = event.urlAfterRedirects === '/productos';
      });
  }
}
