import { Component, input } from '@angular/core';
import { Product } from '@features/products/product.model';
import { CardModule } from 'primeng/card';
import { PrimaryButtonComponent } from "@features/../layout/header/primary-button/primary-button.component";


@Component({
  selector: 'app-card-product',
  imports: [CardModule, PrimaryButtonComponent,PrimaryButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

   product = input<Product>();

}
