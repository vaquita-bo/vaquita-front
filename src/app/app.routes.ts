import { Routes } from '@angular/router';
import { ProductListComponent } from './customer/components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'productos'
    },
    {
        path: 'productos',
        component:  ProductListComponent
    }
];
