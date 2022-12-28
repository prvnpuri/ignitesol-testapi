import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { Language } from './language-entity';

@Table({
    tableName:"books_book_languages",
    timestamps:false
})
export class BookLanguage extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  book_id: number;

  @Column
  language_id: number;


  @BelongsTo(type=>Language,"language_id")
  language:Language;

}