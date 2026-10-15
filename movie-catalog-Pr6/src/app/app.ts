import { Component } from '@angular/core';
import { MovieFormComponent } from './movie-form/movie-form';

@Component({
  selector: 'app-root',
  imports: [MovieFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}