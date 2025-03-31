import { Component , ChangeDetectionStrategy, input, output, inject} from '@angular/core';
import { CartService } from '@features/products/cart.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-primary-button',
  imports: [ButtonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent {
    label = input<string>('');
    btnClicked = output();

    handleClickCart()  {
     this.btnClicked.emit();
     console.log("Button clicked");
   }
}
