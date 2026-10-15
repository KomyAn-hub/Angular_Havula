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

  getMovieById(id: number): Movie | undefined {
    return this.movies().find(movie => movie.id === id);
  }
}