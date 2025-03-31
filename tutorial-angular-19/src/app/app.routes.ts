import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'resource',
    loadComponent: () => import('./resource-demo/resource-demo.component').then( m => m.ResourceDemoComponent)
  },
  {
    path:"linked",
    loadComponent: () => import('./linked-signal/linked-signal.component').then( m => m.LinkedSignalComponent)
  },{
    path:"linked-two",
    loadComponent:() => import('./linked-signal-two/linked-signal-two.component').then( m => m.LinkedSignalTwoComponent)
  }
];
