import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
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

  @Column(DataType.VIRTUAL)
  get author_name(){
    return this.author.get("name");
  }

  @BelongsTo(type=>Author,"author_id")
  author:Author;

}