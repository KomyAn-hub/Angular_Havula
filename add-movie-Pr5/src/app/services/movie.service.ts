import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Єдине джерело даних для всього застосунку
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про подорож крізь червоточину'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про планету Пандора та її мешканців'
    },
    {
      id: 3,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Трилер про крадіжку ідей зі снів людей'
    }
  ];

  getItems(): Movie[] {
    return this.movies;
  }

  getItemById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addItem(item: Omit<Movie, 'id'>): void {
    // Автоматичний id: останній id + 1 (або 1, якщо список порожній)
    const lastId = this.movies.length > 0
      ? this.movies[this.movies.length - 1].id
      : 0;

    this.movies.push({
      id: lastId + 1,
      title: item.title,
      director: item.director,
      description: item.description
    });
  }
}