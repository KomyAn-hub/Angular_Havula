import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  newMovie = {
    title: '',
    director: '',
    description: ''
  };

  submitted = false;
  addedTitle = '';

  constructor(private movieService: MovieService) {}

  addItem(form: NgForm): void {
    this.submitted = true;

    // Якщо хоча б одне поле неправильне — не додаємо
    if (form.invalid) {
      return;
    }

    // Передаємо копію даних у сервіс, id він присвоїть сам
    this.movieService.addItem({ ...this.newMovie });
    this.addedTitle = this.newMovie.title;

    form.resetForm();
    this.submitted = false;
  }
}