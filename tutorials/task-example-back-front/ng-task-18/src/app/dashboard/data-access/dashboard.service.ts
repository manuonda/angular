import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
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


@Inject({
    providedIn: 'root'
})
export default class DashboardService{

    private _http= Inject(HttpClient);
    private _baseUrl = "http://localhost:8080/api/v1/"; 

    getAll(): Observable<User[]> {
        return this._http.get(`${environment.BASE_URL}/users`);
    }
      
}