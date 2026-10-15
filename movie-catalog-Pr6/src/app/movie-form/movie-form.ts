import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Movie {
  title: string;
  director: string;
  description: string;
}

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieFormComponent {
  newMovie: Movie = {
    title: '',
    director: '',
    description: ''
  };

  movies: Movie[] = [];

  submitted = false;

  addMovie(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movies.push({ ...this.newMovie });

    form.resetForm();
    this.submitted = false;
  }
}