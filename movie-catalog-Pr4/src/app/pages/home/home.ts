import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Каталог фільмів</h1>
    <p>
      Простий застосунок для перегляду списку фільмів
      та відкриття детальної інформації про кожен із них.
    </p>
  `,
})
export class HomeComponent {}