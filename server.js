const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 3000
// const DBPORT = process.env.MONGODB_URI

let server = express()

// mongoose.connect(DBPORT)
// mongoose.Promise = global.Promise

// let db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

server.use(logger('dev'))
server.use(cors())

server.use(
	bodyParser.urlencoded({
		extended: false
	})
)
server.use(bodyParser.json())

server.use(express.static('public'))
server.use(express.static('./app/dist'))

server.set('views', './views')

server.use('/', require('./routes'))

module.exports = server

server.listen(PORT, err => {
	if (err) {
		throw err
	}
	console.info('Listening on port ' + PORT + '...')
})
