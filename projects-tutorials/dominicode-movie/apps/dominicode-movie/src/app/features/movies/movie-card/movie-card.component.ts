import { Component, inject, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.interface';
import { ImageService } from '@shared/image.service';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {

  movie = input.required<Movie>();
  imageError = false;

  private readonly _imageService = inject(ImageService);

  getImageUrl(): string {
    const posterPath = this.movie().poster_path;
    return this._imageService.getImageUrl(posterPath);
   }

  setImageError(value: boolean): void {
    this.imageError = value;
  }

}
