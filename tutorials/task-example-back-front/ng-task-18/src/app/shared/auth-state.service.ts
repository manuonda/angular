import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

interface Session{
    access_token: string
}

@Injectable({
    providedIn:'root'
})
export default class AuthStateService{

    private _localStorageService = inject(LocalStorageService);

    getSession ():Session | null {

        let currentSession : Session | null = null;
        currentSession = this._localStorageService.get("session");
        if(currentSession)
        return null;
    }
   
}