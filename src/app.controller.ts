import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './service/books-service';

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService,private booksService:BooksService) {}

  @Get()
  getHello(): string {
    return "Welcome your app is running.";
  }


  @Get("/api/books")
  getBooks(){
    return this.booksService.findAll({offset:0});
  }

}
