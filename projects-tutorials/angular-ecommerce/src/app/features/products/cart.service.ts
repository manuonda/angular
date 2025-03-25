import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product){
     this.cart.set([...this.cart(), product]);
     console.log("Product added to cart", product);
     console.log("Current cart", this.cart());
  }

  constructor() { }
}
