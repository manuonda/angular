import { Injectable, inject, Signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({providedIn: 'root'})
export class ProductService {


  http = inject(HttpClient);
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  // http resource no utiliza observalbes directamente realizamos
  // la peticion a la api y la respuesta es un observable
  // el cual se puede subscribir y obtener la respuesta
  // nativo bajad en signals
  getProductsRs(){
    return httpResource<Product[]>({
      url: 'https://api.escuelajs.co/api/v1/products',
      method: 'GET'
    },{
      defaultValue: []
    });
  }

  getProductRs(id: Signal<string |undefined>) {
    return httpResource<Product | undefined>(() => ({
      url: `https://api.escuelajs.co/api/v1/products/${id()}`,
    }));
  }


}
