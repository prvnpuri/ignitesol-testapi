import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database.module';
import { booksProviders } from './providers/books.providers';
import { BooksService } from './service/books-service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService,BooksService,...booksProviders],
})
export class AppModule {}
