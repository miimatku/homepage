import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }   from '@angular/core';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
    {
        path: '',
        component: ShoppingCartComponent,
        children: [
            { path: '' , component: ProductListComponent },
            { path: 'games' , component: ProductListComponent },
            { path: 'cart', component: CartComponent }
        ]
    }
];

export const ShoppingCartRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
