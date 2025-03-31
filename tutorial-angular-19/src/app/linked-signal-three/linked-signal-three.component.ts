import { Component, computed, linkedSignal, signal } from '@angular/core';


export interface Product {
  name: string;
  price: number;
  color: string;
  quantity: number;
}

@Component({
  selector: 'app-linked-signal-three',
  imports: [],
  templateUrl: './linked-signal-three.component.html',
  styleUrl: './linked-signal-three.component.scss'
})
export class LinkedSignalThreeComponent {
  newFruits =[
    { name: 'Product 4', price: 400, color: 'yellow' },
    { name: 'Product 5', price: 500, color: 'purple' },
    { name: 'Product 6', price: 600, color: 'orange' }
  ];
  products = signal<Product[]>([
    { name: 'Product 1', price: 100, color: 'red' , quantity: 1},
    { name: 'Product 2', price: 200, color: 'blue' ,  quantity: 2},
    { name: 'Product 3', price: 300, color: 'green' , quantity: 3}
  ]);

  seltectedProduct = signal<Product | null > (null);

  price = computed(() => this.seltectedProduct()?.price ?? 0);

  quantity = linkedSignal({
     source: this.seltectedProduct, //depnde de este objeto
     computation:() => 1 // initialize el value
  });




  total = computed(() => this.price() * this.quantity());
  quantityChanged(value:number){
    this.quantity.update((prevValue) => prevValue + value );
  }

}
