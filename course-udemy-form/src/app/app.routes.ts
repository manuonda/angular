import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"template-driven-forms", loadComponent: () => import('./views/template-form/template-form.component').then(m => m.TemplateFormComponent)},
  {path:"reactive-forms" ,loadComponent:() => import('./views/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)}
];
