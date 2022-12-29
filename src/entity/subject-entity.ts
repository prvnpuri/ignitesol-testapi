import { Table, Column, Model, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Books } from './books-entity';
import { BookSubject } from './books-subject-entity';

@Table({
    tableName:"books_subject",
    timestamps:false
})
export class Subject extends Model {
  @Column({
    primaryKey:true
  })
  id: number;

  @Column
  name:string;

  

}