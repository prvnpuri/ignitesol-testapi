import { Table, Column, Model, HasMany, ForeignKey, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Author } from './author-entity';
import { BookAuthor } from './book-author-entity';
import { BookbookShelves } from './book-bookselfves-entity';
import { BookLanguage } from './books-language-entity';
import { BookSubject } from './books-subject-entity';
import { Format } from './formats-entity';
import { Subject } from './subject-entity';

@Table({
    tableName:"books_book",
    timestamps:false
})
export class Books extends Model {
  @Column({
    primaryKey:true,
    type:"int"
  })
  id: number;

  @Column
  download_count: number;

  @Column
  gutenberg_id: number;

  @Column
  media_type:string;
 
  @Column
  title:string;

  @HasMany(type=>BookSubject,"book_id")
  book_subjects:BookSubject[];

  @HasOne(type=>BookAuthor,"book_id")
  book_author:BookAuthor;

  @HasMany(type=>BookbookShelves,"book_id")
  book_shelves:BookbookShelves[];

  @HasMany(type=>BookLanguage,"book_id")
  book_languages:BookLanguage[];

  @HasMany(type=>Format,"book_id")
  book_downloads:BookLanguage[];


}