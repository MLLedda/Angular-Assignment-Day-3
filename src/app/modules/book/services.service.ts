import { Injectable } from '@angular/core';

interface Book {
  id: number;
  name: string;
  authors: string[];
  isbn: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    { id: 1, name: 'Book 1', authors: ['Author A'], isbn: '123456' },
    { id: 2, name: 'Book 2', authors: ['Author B'], isbn: '789101' },
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
