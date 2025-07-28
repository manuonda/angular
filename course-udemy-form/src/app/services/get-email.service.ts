import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GetEmailService {

    private http = inject(HttpClient);
    constructor() { }

    getEmails(): Observable<string[]>{
      return this.http.get<string[]>('/assets/json/email-data.json')
      .pipe(
        delay(1500)
      )

    }

}
