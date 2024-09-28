import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [ 

    {   canActivate: [publicGuard()],
        path: 'auth',
        loadChildren:() => import("./auth/features/auth.route")
    },{
        canActivate: [privateGuard()],
        path:'dashboard',
        loadComponent : () => import("./dashboard/dashboard.component")
    }, {
        path: '**',
        redirectTo: 'dashboard',
    },

];
