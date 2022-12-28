import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { Author } from './author-entity';

@Table({
    tableName:"books_book_authors",
    timestamps:false
})
export class BookAuthor extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  book_id: number;

  @Column
  author_id: number;

  @BelongsTo(type=>Author,"author_id")
  author:Author;

}