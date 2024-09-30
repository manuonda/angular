import { HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "../data-access/auth.service";
import AuthStateService from "../../shared/auth-state.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (
    request: HttpRequest<any>,
    next: HttpHandlerFn
  ) => {

    const authStateService = inject(AuthStateService)
    let token = authStateService.getSession();
    request = request.clone({
        setHeaders:{
            Authorization: `Bearer: ${token}`
        }
    })
    return next(request);
}     
