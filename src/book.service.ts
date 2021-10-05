import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('LIV001', 'TDD e BDD na prática', 29.9),
    new Book('LIV002', 'Iniciando com Flutter', 39.9),
    new Book('LIV003', 'Inteligência artificial como serviço', 25.9),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getById(id: number): Book {
    return this.books.find((p) => p.id === id);
  }

  create(book: Book): Book {
    this.books.push(book);
    return book;
  }

  update(id: number, book: Book): Book {
    const index = this.books.findIndex((p) => p.id === id);
    if (index) {
      this.books[index] = book;
    }
    return book;
  }

  remove(id: number): void {
    const index = this.books.findIndex((p) => p.id === id);
    this.books = this.books.slice(index, 1);
  }
}
