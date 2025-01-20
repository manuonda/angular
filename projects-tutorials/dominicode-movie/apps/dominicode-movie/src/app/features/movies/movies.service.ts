import { Injectable, signal , inject } from '@angular/core';
import { Movie, MovieResponse } from './models/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '@envs/environment';



@Injectable({providedIn: 'root'})
export class MoviesService {
  movies = signal<Movie[]>([]);
  trendingMovies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | null>(null);

  currentPage =signal<number>(1);
  hasMorePages = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  private readonly apiKey = environment.apiKey;
  private readonly apiUrl = environment.apiUrl;
  private readonly _searchTerm = signal<string>('');

  private readonly _http = inject(HttpClient);

  constructor(){
    console.log("informacion movies service");
    this.getMovies();
  }

  getMovieById (movieId: string): Observable<MovieResponse>{
     return this._http.get<MovieResponse>(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getMovies(): void{
    this._http.get<MovieResponse>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(tap((response) => {
        const currentMovies = this.movies();
        this.movies.set([...currentMovies, ...response.results]);
        this.hasMorePages.set(response.page < response.total_pages);
        this.currentPage.update((currentPage) => currentPage + 1);
        this.movies.set(response.results)
      }))
      .subscribe();
  }

}
