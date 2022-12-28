import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName:"books_bookshelf",
    timestamps:false
})
export class Bookshelf extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  name:string;

}