import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class LocalStorageService {
    private _localStorage = localStorage;

    get<T>(key:string): T | null {
        const value = this._localStorage.getItem(key);
        if(!value) return null;
        
        return JSON.parse(value) as T;
    }


    set(key: string , value: string){
        this._localStorage.setItem(key, value); 
    }

    remove(key: string){
        this._localStorage.removeItem(key);
    } 

}
