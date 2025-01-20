import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'movies',
    loadChildren: () => import('./features/movies/movies.routes').then( m => m.movieRoutes)
  },{
    path: '**',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];
