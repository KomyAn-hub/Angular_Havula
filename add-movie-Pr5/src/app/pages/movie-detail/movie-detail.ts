import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './movie-detail.html'
})
export class MovieDetail {
  id = 0;
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    // Отримуємо id з адреси /movie/:id
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.movie = this.movieService.getItemById(this.id);
    });
  }
}