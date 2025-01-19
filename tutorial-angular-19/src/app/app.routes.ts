import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'resource',
    loadComponent: () => import('./resource-demo/resource-demo.component').then( m => m.ResourceDemoComponent)
  }
];
