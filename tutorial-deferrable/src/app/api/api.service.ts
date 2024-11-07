import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Observable, tap } from 'rxjs';


export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({providedIn: 'root'})
export class ApiService {
    private readonly _http = inject(HttpClient);
    posts$!: Signal<Post[]>;
   
    getPosts(): void {
        this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe( 
            tap((posts:Post[]) => { console.log(posts)})
        ).subscribe();
    }

    constructor() { 
        this.getPosts();
    }
    
}