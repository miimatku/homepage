import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product: Product;
    @Input() productId: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  
  onAddToCart(id: number) {
      this.productService.addToCart(id);
  }

}
