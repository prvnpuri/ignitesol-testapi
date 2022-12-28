import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName:"books_author",
    timestamps:false
})
export class Author extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  birth_year: number;

  @Column
  death_year: number;

  @Column
  name:string;

}