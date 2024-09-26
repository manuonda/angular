import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LocalStorageService } from '../../shared/local-storage.service';
import { JsonPipe } from '@angular/common';

export interface User{
  id: number,
  username: string, 
  password: string,
  firstname: string, 
  lastname: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlBase ="http://localhost:8081/api/v1/auth/";
  private _http = inject(HttpClient)
  private _localStorageService = inject(LocalStorageService)
  
  constructor() {
    
   }

   signUp(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Otros headers si son necesarios
    });
  
    let url = `${this._urlBase}/register`;
    return this._http.post(url, user, { headers }).pipe(tap(response => {
      this._localStorageService.set('token', JSON.stringify(response))
    }));
  }

  signIn(user: User){
    const headers  = new HttpHeaders({
        'Content-type':'application/json'
    })

    let url = `${this._urlBase}/login`;
    return this._http.post(url, user , {headers}).pipe(tap(response => {
      this._localStorageService.set('token', JSON.stringify(response))
    }));
  }
  
} 
