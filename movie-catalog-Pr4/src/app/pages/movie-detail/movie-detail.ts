import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie, MOVIES } from '../../movies.data';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
    <div *ngIf="movie; else notFound">
      <h1>{{ movie.title }}</h1>
      <p>Рік: {{ movie.year }}</p>
      <p>Рейтинг: {{ movie.rating }}/10</p>
    </div>

    <ng-template #notFound>
      <p>Фільм не знайдено</p>
    </ng-template>

    <a routerLink="/movies">← Назад до списку</a>
  `,
})
export class MovieDetailComponent {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find(m => m.id === id);
  }
}