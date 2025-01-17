import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, signal ,effect} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@features/categories/categories.service';
import CategoryButtonComponent from '../category-button/category-button.component';
import { ProductsService } from '@features/products/products.service';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [ CategoryButtonComponent],
  styleUrl: './category-filter.component.scss',
  template: `
    <h2 class="heading">
      <span class="highlight">Popular</span>
      categories
    </h2>
    {{selectedCategory()}}
    <ul class="list-container">
      <!-- TODO: Can be an  component -->
      <li>
        <app-category-button  category="ALL" [(filterCategory)]="selectedCategory"/>
      </li>
      <!-- TODO: Can be an  component -->
       @for( category of categories()  ; track category){
         <li>
            <app-category-button  [category]="category" [(filterCategory)]="selectedCategory"/>
          </li>
       }
    </ul>
  `,
})
export class CategoryFilterComponent {
   categories = inject(CategoryService).categories;
  private readonly _router = inject(Router);
  selectedCategory = signal<string>('all');
  private readonly _productService = inject(ProductsService);

  constructor(){
    effect(() => this._productService.filterProductsByCategory(this.selectedCategory()) 
    ,{allowSignalWrites: true}) 
    //Note: angular 19 ya no existe esta propiedad
  }
  
  // onClick(category: string): void {
  //   console.log("category : ", category);
  //   this._router.navigate([], {
  //     queryParams: { category: category === 'all' ? null : category },
  //     queryParamsHandling: 'merge',
  //     replaceUrl: true,
  //   });
  // }

 
}
