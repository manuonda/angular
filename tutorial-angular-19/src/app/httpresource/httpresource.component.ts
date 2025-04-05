import { Component, inject } from '@angular/core';
import { ProductService } from './produce.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-httpresource',
  imports: [RouterLink],
  templateUrl: './httpresource.component.html',
  styleUrl: './httpresource.component.scss'
})
export class HttpresourceComponent {
   private _productService = inject(ProductService);

   // rxResource es un recurso para peticiones que se subscribe
   // a rxjs , observables , switch map, pipe, etc.
  //  productRs = rxResource({
  //    loader:() => this._productService.getProducts(),
  // })

  productRs = this._productService.getProductsRs();

  reset(){
    this.productRs.set([]);
  }

  getProducts(){
    this.productRs.reload();
  }
}
