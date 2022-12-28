import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Author } from 'src/entity/author-entity';
import { BookAuthor } from 'src/entity/book-author-entity';
import { BookbookShelves } from 'src/entity/book-bookselfves-entity';
import { Books } from 'src/entity/books-entity';
import { BookLanguage } from 'src/entity/books-language-entity';
import { BookSubject } from 'src/entity/books-subject-entity';
import { Bookshelf } from 'src/entity/bookshelf-entity';
import { Format } from 'src/entity/formats-entity';
import { Language } from 'src/entity/language-entity';
import { Subject } from 'src/entity/subject-entity';
import * as env from "../env";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const dbconfig=env.config.dbconfig;
      const sequelize = new Sequelize( dbconfig.database,dbconfig.username,dbconfig.password ,{
        dialect: dbconfig["dialect"] as Dialect,
        host: dbconfig.host,
      });
      sequelize.addModels([
        Books,
        BookSubject,Subject,
        BookAuthor,Author,
        Bookshelf,BookbookShelves,
        Language,BookLanguage,
        Format
      
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];