import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
import { Bookshelf } from './bookshelf-entity';

@Table({
    tableName:"books_book_bookshelves",
    timestamps:false
})
export class BookbookShelves extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  book_id: number;

  @Column
  bookshelf_id: number;

  @Column(DataType.VIRTUAL)
  get bookshelf_name(){
    return this.shelf.get("name");
  }

  @BelongsTo(type=>Bookshelf,"bookshelf_id")
  shelf:Bookshelf;


}