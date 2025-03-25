import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CartService } from '@features/products/cart.service';
import { PrimaryButtonComponent } from '@layout/header/primary-button/primary-button.component';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl:"./header.component.html",
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
   title = signal<string>("Angular Ecommerce");
   cartService = inject(CartService);
   showButtonClicked(){
      console.log("Button clicked Header");
   }
 }
