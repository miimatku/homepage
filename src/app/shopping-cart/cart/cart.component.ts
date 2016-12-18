import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    private myCart: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.myCart = this.productService.getCart();
  }
  
  

}
