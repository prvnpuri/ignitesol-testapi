import { Module } from '@nestjs/common';
import { booksProviders } from 'src/providers/books.providers';
import { databaseProviders } from '../providers/database.providers';
 
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}