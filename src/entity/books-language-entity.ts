import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
import { Language } from './language-entity';

@Table({
    tableName:"books_book_languages",
    timestamps:false
})
export class BookLanguages extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  book_id: number;

  @Column
  language_id: number;

  @Column(DataType.VIRTUAL)
  get language_code(){
    return this.language.get("code");
  }

  @BelongsTo(type=>Language,"language_id")
  language:Language;


}