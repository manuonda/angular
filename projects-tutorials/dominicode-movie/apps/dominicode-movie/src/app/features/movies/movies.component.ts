import {
  Component,
  computed,
  effect,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';
import { RouterLink } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  imports: [RouterLink , MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  isLoading = computed(() => this._moviesService.isLoading());
  hasMorePages = computed(() => this._moviesService.hasMorePages());
  currentPage = computed(() => this._moviesService.currentPage());

  private readonly _moviesService = inject(MoviesService);

  readonly movies = this._moviesService.movies;

  constructor() {
    effect(() => this.movies());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isLoading() || !this.hasMorePages()) return;

    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const scrollTrheadhold = document.documentElement.scrollHeight;

    if (scrollPosition >= scrollTrheadhold) {
      this._moviesService.getMovies();
    }
  }
}
