

import { Table, Column, Model, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Books } from './books-entity';
import { Subject } from './subject-entity';

@Table({
    tableName:"books_book_subjects",
    timestamps:false
})
export class BookSubject extends Model {
  @Column({
    primaryKey:true,
    type:"int"
  })
  id: number;

  @Column
  book_id: number;

  @Column
  subject_id: number;

  @BelongsTo(type=>Subject,"subject_id")
  subject:Subject;

}