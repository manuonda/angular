import { Component , input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  //movieId = this.route.snapshot.params.movieId;
  movieId = input.required<string>();
}
