import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartHeaderComponent } from './shopping-cart-header/shopping-cart-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductService } from './product-list/product.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [ShoppingCartComponent, ShoppingCartHeaderComponent, ProductListComponent, ProductItemComponent, CartComponent],
  providers: [ ProductService ]
})
export class ShoppingCartModule { }
