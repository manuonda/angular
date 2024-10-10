import { Routes } from "@angular/router";
import path from "path";


export default [
    {
        path:'',
        loadComponent: () => import('')
    }
] as Routes;