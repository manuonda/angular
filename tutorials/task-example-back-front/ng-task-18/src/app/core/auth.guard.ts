import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../shared/local-storage.service";
import AuthStateService from "../shared/auth-state.service";


export const privateGuard = ():CanActivateFn => {
    return () => {
      
       const authService = inject(AuthStateService);
       const router = inject(Router)

       const session = authService.getSession();
       if( session) {
        return  true;
       }
       router.navigateByUrl("/auth/sign-in")
       return false;
    }
}



export const publicGuard = ():CanActivateFn => {
    return () => {
        console.log("public guard")
        const authService = inject(AuthStateService);
        const router = inject(Router)

        const session = authService.getSession();
        console.log("session in public guard : ", session)
        if (session) {
            router.navigateByUrl("/dashboard")
            return false
        }

        return true;
    }
}