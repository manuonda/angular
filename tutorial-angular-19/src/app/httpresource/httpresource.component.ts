import { Component, inject } from '@angular/core';
import { ProductService } from './produce.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-httpresource',
  imports: [],
  templateUrl: './httpresource.component.html',
  styleUrl: './httpresource.component.scss'
})
export class HttpresourceComponent {
   private _productService = inject(ProductService);

   productRs = rxResource({
     loader:() => this._productService.getProducts(),
  })

  reset(){
    this.productRs.set([]);
  }

  getProducts(){
    this.productRs.reload();
  }
}
