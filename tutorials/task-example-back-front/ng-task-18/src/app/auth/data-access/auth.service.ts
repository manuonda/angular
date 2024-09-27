import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
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

  private _urlBase ="http://localhost:8081/api/v1/auth";
  private _http = inject(HttpClient)
  private _localStorageService = inject(LocalStorageService)
  
  constructor() {
    
   }

   signUp(user: User):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Otros headers si son necesarios
    });
  
    let url = `${this._urlBase}/register`;
    return this._http.post<any>(url, user, { headers }).pipe(tap(response => {
       this._localStorageService.set('access_token', JSON.stringify(response))
       return response;
    }));
  }

  signIn(user: User): Observable<any>{
    const headers  = new HttpHeaders({
        'Content-type':'application/json'
    })

    console.log("user: ", user);
    let url = `${this._urlBase}/login`;
    return this._http.post<any>(url, user , {headers})
    .pipe(tap(response => {
      console.log("response : ", response);
      this._localStorageService.set('access_token', JSON.stringify(response))
      return response;
    }));
  }
  
} 
