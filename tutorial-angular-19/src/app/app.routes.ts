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
  },{
    path:"linked-three",
    loadComponent:() => import('./linked-signal-three/linked-signal-three.component').then( m => m.LinkedSignalThreeComponent)
  },{
    path:"reactive-form",
    loadComponent: () => import('./reactive-forms-validation/reactive-forms-validation.component').then(m => m.ReactiveFormsValidationComponent)
  }, {
    path:"rxresource",
    loadComponent :() => import('./refresh-rxresource/refresh-rxresource.component').then(m => m.VehicleSelectionComponent)
  },{
    path:"httpresource",
    loadComponent: () => import('./httpresource/httpresource.component').then(m => m.HttpresourceComponent)
  },{
    path: 'products/:id',
    loadComponent: () => import('./httpresource/detail/detail.component').then(m => m.DetailComponent)
  }
];
