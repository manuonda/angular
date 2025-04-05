import { ProductService } from './../produce.service';
import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  providers:[Location],
  imports: [],
  template: `
    <h1>Detail</h1>
    <p>loading {{ productRs.isLoading()}}</p>
    @if ( !productRs.isLoading() &&  productRs.hasValue()) {

       @let product = productRs.value();
        <div class="card">
          <h3> {{ product.title}}</h3>
          <h4> {{ product.description}}</h4>
        </div>

    }
  `,
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  id = input<string | undefined>();

  location = inject(Location);
  productService = inject(ProductService);

  /*
  productRs = rxResource({
    request: () => ({
      id: this.id(),
    }),
    loader: ({ request }) => this.productService.getProduct(request.id),
  });
  */
  productRs = this.productService.getProductRs(this.id);

  reset() {
    this.productRs.set(undefined);
  }

  getProducts() {
    this.productRs.reload();
  }

  goBack() {
    this.location.back();
  }

}
