const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')


const indexRouter = require('./routes/index')



app.use(express.json())
app.use(cors())
app.use(logger('dev'))

const { connectDB } = require('./db/db')

app.use('/', indexRouter)



connectDB()

module.exports = app