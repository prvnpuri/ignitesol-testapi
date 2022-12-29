# Ignite solution - Books Excercise
## @author: Praveen goswami


### Required tools

1. Node js 
2. mysql

### how to setup

1. Import DLL and data to mysql

mysql dump file https://drive.google.com/file/d/1Q3QZcy3fmltgLIwLsldPx_KYBOTNuAGA/view

2. install dependencies

```
npm install
```

3. Please check database configurations in location src/env.ts

### run server

```
npm run start:dev
```

### Api details


1. List of books :

Method: GET
url: http://localhost:3000/api/books
params: 
- limit -  ( default : 25)
- offset - ( default : 0)  

example : http://localhost:3000/api/books?offset=25

2. List of books with filters

Method: GET
url: http://localhost:3000/api/books
params: 
- limit -  ( default : 25)
- offset - ( default : 0)  
- gutenberg_id - (default: null)
- title - (default: null)
- language_code - (default:null)
- mime_type - (default:null)
- author - (default:null)



example : 
- http://localhost:3000/api/books?gutenberg_id=1260
- http://localhost:3000/api/books?title=Jane
