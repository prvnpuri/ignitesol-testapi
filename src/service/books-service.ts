import { Injectable, Inject } from '@nestjs/common';
import { BookbookShelves } from 'src/entity/book-bookselfves-entity';
import { BookSubject } from 'src/entity/books-subject-entity';
import { Bookshelf } from 'src/entity/bookshelf-entity';
import { Subject } from 'src/entity/subject-entity';
import { Books } from '../entity/books-entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Books
  ) {}

  async findAll({offset}): Promise<Books[]> {
    return this.booksRepository.findAll({
      offset:offset,
      limit:25,
      order:[["download_count","desc"]],
      include:[{
        model:BookSubject,
        include:[Subject]
      },
      {
        model:BookbookShelves,
        include:[Bookshelf]
      }
    ]
    });
  }
}