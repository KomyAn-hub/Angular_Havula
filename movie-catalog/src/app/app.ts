import { Component } from '@angular/core';
import { MovieList } from './movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}