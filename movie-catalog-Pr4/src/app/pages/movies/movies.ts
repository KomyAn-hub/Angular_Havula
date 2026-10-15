import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MOVIES } from '../../movies.data';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <h1>Фільми</h1>

    <div *ngFor="let movie of movies" class="card">
      <h2>{{ movie.title }}</h2>
      <p>Рік: {{ movie.year }}</p>
      <a [routerLink]="['/movie', movie.id]">Переглянути деталі</a>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 16px; margin-bottom: 12px; }
  `],
})
export class MoviesComponent {
  movies = MOVIES;
}