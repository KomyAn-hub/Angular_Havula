import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [NgFor, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
  movies: Movie[] = [];

  // Dependency Injection: Angular сам передає екземпляр сервісу
  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getItems();
  }
}