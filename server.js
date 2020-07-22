const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

let server = express()

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

if (process.env.NODE_ENV === 'development') {
  server.use(logger('dev'))
}

server.use(cors())

server.use(
  express.urlencoded({
    extended: false
  })
)
server.use(express.json())

server.use('/', require('./routes'))

module.exports = server

server.listen(PORT, err => {
  if (err) {
    throw err
  }
  console.info('Listening on port ' + PORT + '...')
})
