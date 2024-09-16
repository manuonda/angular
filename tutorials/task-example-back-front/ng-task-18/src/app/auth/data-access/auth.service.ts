import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface User{
  id: number,
  email: string, 
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url ="http://localhost:8081/api/v1/users";
  private _http = inject(HttpClient)
  constructor() {
    
   }

   signUp(user : User){
    return htt
   }
}
