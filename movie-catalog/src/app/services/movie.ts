import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = signal<Movie[]>([
    { id: 1, title: 'Interstellar', year: 2014, rating: 9 },
    { id: 2, title: 'Avatar', year: 2009, rating: 8 },
    { id: 3, title: 'Titanic', year: 1997, rating: 7 }
  ]);

  getMovies() {
    return this.movies;
  }

  addMovie(title: string, year: number, rating: number): void {
    const newMovie: Movie = { id: this.generateId(), title, year, rating };
    this.movies.update(current => [...current, newMovie]);
  }

  removeMovie(id: number): void {
    this.movies.update(current => current.filter(m => m.id !== id));
  }

  private generateId(): number {
    const current = this.movies();
    return current.length > 0 ? Math.max(...current.map(m => m.id)) + 1 : 1;
  }
}