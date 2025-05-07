import { Routes } from '@angular/router';
import { ProductListComponent } from './client/pages/product-list/product-list.component';
import {VistaPrincipalComponent} from './proveedores/components/vista-principal/vista-principal.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent

    },
  {
    path: 'vendedor',
    pathMatch: 'full',
    component: VistaPrincipalComponent

  }

];
