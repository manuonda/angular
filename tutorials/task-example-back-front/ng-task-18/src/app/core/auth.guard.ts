import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../shared/local-storage.service";


export const privateGuard = ():CanActivateFn => {
    return () => {
        const router = inject(Router);
        const localStorageService = inject(LocalStorageService);
        const token = localStorageService.get('access_token')
        
        return true
    }
}



export const publicGuard = ():CanActivateFn => {
    return () => {
        return true
    }
}