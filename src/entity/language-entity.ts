import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName:"books_language",
    timestamps:false
})
export class Language extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  code:string;

}