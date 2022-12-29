import { Controller, Get } from '@nestjs/common';
import { Header, Req } from '@nestjs/common/decorators';
import { Request } from 'express';
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
  @Header('Cache-Control', 'none')
  getBooks(@Req() request: Request){
    let query=Object.assign({
      offset:0,
      limit:25,
    },request.query);
    return this.booksService.findAll(query);
  }

}
