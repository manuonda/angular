import { Routes } from "@angular/router";
import path from "path";


export default [
    {
        path:'',
        loadComponent: () => import('../contact/list/list.component').then(m => m.ListComponent)
    }
] as Routes;