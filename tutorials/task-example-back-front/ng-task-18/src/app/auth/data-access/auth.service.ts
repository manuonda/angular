import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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

  private _url ="http://localhost:8081/api/v1/auth/register";
  private _http = inject(HttpClient)
  constructor() {
    
   }

   signUp(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Otros headers si son necesarios
    });
  
    return this._http.post(this._url, user, { headers }).pipe();
  }
  
} 
