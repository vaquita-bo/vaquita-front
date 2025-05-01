import { Routes } from '@angular/router';
import { ProductListComponent } from './client/pages/product-list/product-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent
    }
];
