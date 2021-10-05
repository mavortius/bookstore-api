import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books-controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, BookService],
})
export class AppModule {}
