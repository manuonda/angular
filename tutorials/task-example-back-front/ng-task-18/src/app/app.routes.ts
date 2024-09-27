import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [ 

    {   canActivateChild: [publicGuard()],
        path: 'auth',
        loadChildren:() => import("./auth/features/auth.route")
    },{
        canActivateChild: [privateGuard()],
        path:'dashboard',
        loadChildren : () => import("./task/features/task.route")
    },{
        path:'**',
        redirectTo: 'auth'
    }

];
