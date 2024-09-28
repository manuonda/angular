import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

interface Session{
    session: string
}

@Injectable({
    providedIn:'root'
})
export default class AuthStateService{

    private _localStorageService = inject(LocalStorageService);

    private signOut(){
      this._localStorageService.remove('session');
    }
    getSession():Session | null {

        let currentSession : Session | null = null;
        const maybeSession = this._localStorageService.get<Session>("session");
        if( maybeSession !== null && this._isValidateSession(maybeSession)){
            currentSession = maybeSession
        } else {

            this.signOut();
        }
        return currentSession;
    }

    private _isValidateSession(maybeSession:unknown):boolean{
        return ( typeof maybeSession === 'object' &&
        maybeSession !== null &&
        'session' in maybeSession);
    }
   
}