import { Component, computed, linkedSignal, signal } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  color: string;
}

@Component({
  selector: 'app-linked-signal-two',
  imports: [],
  templateUrl: './linked-signal-two.component.html',
  styleUrl: './linked-signal-two.component.scss'
})

//https://www.youtube.com/watch?v=5wVWGrANIqc&t=60s

//https://www.youtube.com/watch?v=9ymdfkqSTuU&t=390s

export class LinkedSignalTwoComponent {

  newFruits =[
    { name: 'Product 4', price: 400, color: 'yellow' },
    { name: 'Product 5', price: 500, color: 'purple' },
    { name: 'Product 6', price: 600, color: 'orange' }
  ];
  products = signal<Product[]>([
    { name: 'Product 1', price: 100, color: 'red' },
    { name: 'Product 2', price: 200, color: 'blue' },
    { name: 'Product 3', price: 300, color: 'green' }
  ]);

  selectedProduct = linkedSignal(() => this.products()[0]);

  selectProduct(index: number) {
    this.selectedProduct.set(this.products()[index]);
  }

  changeProducts(){
     this.products.set(this.newFruits);
  }


}
