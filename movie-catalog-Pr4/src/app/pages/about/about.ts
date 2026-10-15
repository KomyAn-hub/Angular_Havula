import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>Про сайт</h1>
    <p>
      Цей застосунок дозволяє переглядати список фільмів
      та відкривати детальну інформацію про кожен із них.
    </p>
  `,
})
export class AboutComponent {}