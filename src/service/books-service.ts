import { Injectable, Inject } from '@nestjs/common';
import sequelize,{Op} from 'sequelize';
import { Author } from 'src/entity/author-entity';
import { BookAuthor } from 'src/entity/book-author-entity';
import { BookbookShelves } from 'src/entity/book-bookselfves-entity';
import { BookLanguages } from 'src/entity/books-language-entity';
import { BookSubject } from 'src/entity/books-subject-entity';
import { Bookshelf } from 'src/entity/bookshelf-entity';
import { Format } from 'src/entity/formats-entity';
import { Language } from 'src/entity/language-entity';
import { Subject } from 'src/entity/subject-entity';
import { Books } from '../entity/books-entity';

@Injectable()
export class BooksService {
  
  operatorsAliases:any = {
    $like: Op.like,
    $not: Op.not
  }
  
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Books
  ) {}

  async findAll(query:any) {    

    let options:any={
      offset: parseInt( query.offset),
      limit:parseInt( query.limit),
      order:[["download_count","desc"]],
      include:[{
          model:BookSubject,
          include:[Subject],
          required:false
        },
        {
          model:BookbookShelves,
          include:[Bookshelf]
        },
        {
          model:BookAuthor,
          include:[{
            model:Author,
            where:(()=>{
              let conditions:any={};
              if(query?.author){
                conditions["name"]={
                  [Op.like] : query?.author
                }
              }
              return conditions;
            })(),
          }]
        },
        {
          model:BookLanguages,
          include:[{
            model:Language,
            where:(()=>{
              let conditions:any={};
              if(query?.language_code){
                conditions["code"]={
                  [Op.like] : query?.language_code
                }
              }
              return conditions;
            })(),
          }],
        },{
          model:Format,
          where:(()=>{
            let conditions:any={};
            if(query?.mime_type){
              conditions["mime_type"]={
                [Op.like] : query?.mime_type
              }
            }
            return conditions;
          })(),
        }
      ],
      where:(():any=>{ 
        let conditions:any={};
        if(query?.gutenberg_id){
          conditions["gutenberg_id"]= query?.gutenberg_id;
        }
        if(query?.title){
          conditions["title"]={
            [Op.like] : "%"+query?.title+"%"
          }
        }
        
        return conditions;
      })()
    

    };
    
    let count= await this.booksRepository.count(Object.assign(options,{
      distinct:true
    }));
    let data= await this.booksRepository.findAll(options);
    return {
      total_count:count,
      books:data
    }
  }
}