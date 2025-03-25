import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";

import { Button, ButtonModule } from 'primeng/button';
import { ProductsComponent } from "@features/products/products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ButtonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ecommerce';
}
