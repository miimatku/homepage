import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class ProductService {
    private products: Product[] = [
        new Product('Super Mario Bros', 'The first of the Super Mario series of games.', 
            'http://static.planetminecraft.com/files/resource_media/screenshot/1135/Super_Mario_Bros_-_1985_-_Nintendo_383291.jpg'),
        new Product('Super Mario Bros 3', 'The biggest, most exciting MARIO BROS adventure yet!', 'http://images1.wikia.nocookie.net/__cb20120724215319/mario/images/f/f0/Super_Mario_Bros_3_-_North_American_Boxart.png'),
        new Product('Mega Man 3', 'Mega Man adventure part 3', 'http://img.gamefaqs.net/box/1/1/5/22115_front.jpg'),
        new Product('Contra', 'Run and gun-style shoot-em-ups. ', 'http://www.geekthenews.com/wp-content/uploads/2013/01/8bitContra.jpg'),
        new Product('World Cup', 'Best football game', 'http://s.emuparadise.org/Nintendo%20Entertainment%20System/Snaps/Nintendo%20World%20Cup%20(U).png')
        
    ];
    
    private cart: Product[] = [];

  constructor() { }
  
  getCart() {
      return this.cart;
  }
  
  getProducts() {
      return this.products;
  }
  
  addToCart(productId: number) {
      alert(this.products[productId]);
      this.cart.push(this.products[productId]);
  }

}
