import { Component, computed, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MoviesService } from '@features/movies/movies.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dominicode-movie';
  private readonly _moviesService = inject(MoviesService);
  heroMovie = computed(()=> this._moviesService.selectedMovie())
  showButton = false;
  constructor() {
    window.addEventListener('scroll', () => {
      this.showButton = window.scrollY > 100;
    });
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
