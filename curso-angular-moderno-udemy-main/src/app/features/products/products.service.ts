import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';

import { Product } from '@features/products/product.interface';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { APIService } from './../../api/api.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  //private _allProducts$ = new BehaviorSubject<Product[]>([]);
  _allProducts = signal<Product[]>([]);
  //private _filteredProducts$ = new BehaviorSubject<Product[]>([]);
  _filteredProducts = signal<Product[]>([]);
  
  //readonly products$ = this._filteredProducts$.asObservable();
  products = computed(() =>this._filteredProducts());

  private readonly _apiService = inject(APIService);
  private readonly _endPoint = `${environment.API_URL_FAKE_STORE}/products`;

  constructor() {
    this.getAllProducts()
      .pipe(
        tap((products: Product[]) => {
          // this._allProducts$.next(products);
          // this._filteredProducts$.next(products);
          this._allProducts.set(products);
          this._filteredProducts.set(products);
        })
      )
      .subscribe();
  }

  getProductById(productId: number): Product | undefined{
    return this._allProducts().find((product) => product.id === productId);
  }

  filterProductsByCategory(category: string): void {
    if (category === 'all') {
      this._filteredProducts.set(this._allProducts());
    } else {
       const filtered =  
    }
  }

  getProductsByCategory(category: string) {
    return this._apiService
      .get<Product[]>(`${this._endPoint}/category/${category}`)
      .pipe(map((products: Product[]) => this._addProperties(products)));
  }

  private getAllProducts(): Observable<Product[]> {
    return this._apiService
      .get<Product[]>(`${this._endPoint}?sort=desc`)
      .pipe(map((products: Product[]) => this._addProperties(products)));
  }

  private _addProperties(products: Product[]): Product[] {
    return products.map((product) => ({
      ...product,
      quantity: 0,
    }));
  }
}
