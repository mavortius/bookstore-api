import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books-controller';
import { BookService } from './book.service';
import { Book } from './book.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'R00t_P@ss',
      database: 'bookstore',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BookService],
})
export class AppModule {}
