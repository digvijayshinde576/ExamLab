const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('welcome to the my APIs')
})


const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

app.listen(4444, '0.0.0.0', () => {
  console.log('server started on port 4444')
})
