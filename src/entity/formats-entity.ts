import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName:"books_format",
    timestamps:false
})
export class Format extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  mime_type: string;

  @Column
  url: string;

  @Column
  book_id: number;

}