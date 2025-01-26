import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, signal } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class LinkedSignalComponent {

  selectedProduct = signal<Product | null>(null);
  price = computed(() => this.selectedProduct()?.price ??  0 )
  //quantity = signal(1);

  total = computed(() => this.price() * this.quantity());
  //cuando cambia select product setea el valor de cantidad a 1
  quantity = linkedSignal({
    source: this.selectedProduct,
    computation :() => 1
  });

  onQuantityChange(qty: number){
    this.quantity.set(qty);
  }
}
