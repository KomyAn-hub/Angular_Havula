import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  pages: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  books: Book[] = [
    { title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
    { title: '1984', author: 'Джордж Орвелл', pages: 320 },
    { title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 300 }
  ];

  newTitle: string = '';
  newAuthor: string = '';
  newPages: number | null = null;

  addBook(): void {
    if (!this.newTitle.trim()) {
      return;
    }

    const book: Book = {
      title: this.newTitle.trim(),
      author: this.newAuthor.trim() || 'Автор невідомий',
      pages: this.newPages && this.newPages > 0 ? this.newPages : 0
    };

    this.books.push(book);

    this.resetForm();
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
  }

  resetForm(): void {
    this.newTitle = '';
    this.newAuthor = '';
    this.newPages = null;
  }

  get isAddDisabled(): boolean {
    return !this.newTitle.trim();
  }

  getSizeClass(pages: number): string {
    if (pages > 350) {
      return 'book-large';
    } else if (pages >= 200) {
      return 'book-medium';
    } else {
      return 'book-small';
    }
  }

  get totalBooks(): number {
    return this.books.length;
  }
}