import { Component, signal } from '@angular/core';
import { Product } from './product.model';
import { CardComponent } from '@features/products/card/card.component';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products = signal<Product[]>([
  {
    id: 1,
    title: 'Laptop',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 1200,
    stock: 10
  },
  {
    id: 2,
    title: 'Smartphone',
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UL640_QL65_ML3_.jpg',
    price: 800,
    stock: 15
  },
  {
    id: 3,
    title: 'Headphones',
    image: 'https://fakestoreapi.com/img/61MTLz3M1sL._AC_UL640_QL65_ML3_.jpg',
    price: 150,
    stock: 20
  },
  {
    id: 4,
    title: 'Smartwatch',
    image: 'https://fakestoreapi.com/img/71z2dc+eZ5L._AC_UL640_QL65_ML3_.jpg',
    price: 200,
    stock: 5
  }
  ])
}
