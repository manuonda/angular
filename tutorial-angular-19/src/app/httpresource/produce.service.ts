import { HttpClient , httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({providedIn: 'root'})
export class ProductService {

  http = inject(HttpClient);
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  getProductsRs(){
    return httpResource
  }


}
