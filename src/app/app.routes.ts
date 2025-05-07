import { Routes } from '@angular/router';
import { ProductListComponent } from './client/pages/product-list/product-list.component';
import { ProductDetailComponent } from './client/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductListComponent
  },
  {
    path: 'productos/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: 'productos'  // o puedes mostrar un componente de "404 Not Found"
  }
];
