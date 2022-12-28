import { Books } from '../entity/books-entity';

export const booksProviders = [
  {
    provide: 'BOOKS_REPOSITORY', 
    useValue: Books,
  },
];