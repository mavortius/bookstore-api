import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BookService } from './book.service';

@Controller('books')
export class BooksController {
  constructor(private service: BookService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.service.getAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Book> {
    return this.service.getById(params.id);
  }

  @Post()
  async create(@Body() book): Promise<Book> {
    return this.service.create(book);
  }

  @Put()
  async update(@Body() book): Promise<[number, Book[]]> {
    return this.service.update(book);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<void> {
    return this.service.remove(params.id);
  }
}
