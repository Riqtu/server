import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import PostController from './controllers/PostController'

const Post = new PostController()

const app = express()
const cors = require('cors')

// mongoose.connect(
//   'mongodb+srv://Zet:20011998z@fors-rmfbi.azure.mongodb.net/test?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }
// )
mongoose.connect('mongodb://localhost/forsmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post('/posts', Post.create)
app.get('/posts', Post.index)
app.delete('/posts/:id', Post.delete)
app.delete('/posts/:title', Post.deleteTitleAll)
app.put('/posts/:id', Post.update)
app.get('/posts/:id', Post.read)

app.listen('3333', () => {
  console.log('Server started!!!')
})
