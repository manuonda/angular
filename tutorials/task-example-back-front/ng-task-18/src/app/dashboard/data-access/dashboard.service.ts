import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";


interface User{
    id: number,
    username: string,
    lastname: string,
    email: string,
    role: string 
}


@Injectable({
    providedIn: 'root'
})
export default class DashboardService{

    private _http= inject(HttpClient);
    private _baseUrl = "http://localhost:8080/api/v1/"; 

    getAll(){
       const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // Otros headers si son necesarios
          });
          
       return this._http.get<User[]>(`${environment.BASE_URL}/users`);
    }
      
}