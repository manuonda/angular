import { Routes } from "@angular/router";


export default [
    {
        path:'tasks',
        loadComponent:() => import("./task-list/task-list.component")
    },
] as Routes