import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  private movieService = inject(MovieService);   // <-- замість constructor
  movies = this.movieService.getMovies();

  title = '';
  year: number | null = null;
  rating: number | null = null;

  onAddMovie(): void {
    if (!this.title.trim() || this.year === null || this.rating === null) return;
    this.movieService.addMovie(this.title.trim(), this.year, this.rating);
    this.resetForm();
  }

  onRemoveMovie(id: number): void {
    this.movieService.removeMovie(id);
  }

  private resetForm(): void {
    this.title = '';
    this.year = null;
    this.rating = null;
  }
}