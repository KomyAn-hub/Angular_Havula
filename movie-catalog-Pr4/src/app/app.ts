import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Головна</a>
      <a routerLink="/movies" routerLinkActive="active">Фільми</a>
      <a routerLink="/about" routerLinkActive="active">Про сайт</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav { display: flex; gap: 16px; padding: 12px 20px; background: #222; }
    nav a { color: #ccc; text-decoration: none; }
    nav a.active { color: #fff; font-weight: bold; }
    main { padding: 20px; }
  `],
})
export class AppComponent {}