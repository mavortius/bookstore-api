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
  getAll(): Book[] {
    return this.service.books;
  }

  @Get(':id')
  getById(@Param() params): Book {
    return this.service.getById(params.id);
  }

  @Post()
  create(@Body() book): Book {
    return this.service.create(book);
  }

  @Put(':id')
  update(@Param() params, @Body() book): Book {
    return this.service.update(params.id, book);
  }

  @Delete(':id')
  remove(@Param() params): void {
    this.service.remove(params.id);
  }
}
