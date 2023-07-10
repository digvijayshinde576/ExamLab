const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (request, response) => {
  const statement = `select id,bookname ,author,booktype,price,publisheddate,language from books`;
  db.query(statement, (error, data) => {
    if (error) {
      response.send('error')
    } else {
      response.send(data)
    }
  })
})






router.post("/", (request, response)=>{
  

  const statement = 
  `insert into books values(${request.body.id}, '${request.body.bookname}','${request.body.author}','${request.body.booktype}','${request.body.price}','${request.body.publisheddate}','${request.body.language}'
  )`;

  db.query(statement, (error, data)=>{
      if(error)
      {
        
          response.send(error);
      } 
      else
      {
         
          response.send(data)
      }
      response.end();
})
})



router.put("/:id", (request, response)=>{
 
  const statement = 
  `update books set bookname = '${request.body. bookname }',
                    author= '${request.body.author}',
                    booktype = '${request.body.booktype}',
                    price = '${request.body.price}',
                    publisheddate = '${request.body.publisheddate}',
                    language = '${request.body.language}' where id = ${request.params.id}`;
                  db.query(statement, (error, data)=>{
                    if(error)
                    {
                      
                        response.send(error);
                    } 
                    else
                    {
                       
                        response.send(data)
                    }
                    response.end();
              })
})



module.exports = router









































