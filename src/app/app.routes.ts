import { Routes } from '@angular/router';
import { ProductListComponent } from './customer/components/product-list/product-list.component';
import { ProductDetailComponent } from './client/pages/product-detail/product-detail.component';
import {VistaPrincipalComponent} from './proveedores/components/vista-principal/vista-principal.component';

export const routes: Routes = [
  {
    path: 'productos',
    loadComponent: () => import('./layout/customer-layout/customer-layout.component').then(m => m.CustomerLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./client/pages/product-list/product-list.component').then(m => m.ProductListComponent),
      },
      
      {       
        path: ':id',
        loadComponent: () =>
          import('./client/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
      }
    ]
  },
  {
    path: 'vendedor',
    pathMatch: 'full',
    component: VistaPrincipalComponent

  },
  {
    path: '**',
    redirectTo: 'productos'
  }  

];
