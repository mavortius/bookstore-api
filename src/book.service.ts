import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getById(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book): Promise<Book> {
    return this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: { id: book.id },
    });
  }

  async remove(id: number): Promise<void> {
    const book = await this.getById(id);
    return book.destroy();
  }
}
