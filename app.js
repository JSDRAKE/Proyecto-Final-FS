const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')



const indexRouter = require('./routes/index')
const getRouter = require('./routes/getRig')
const getRigByIdRouter = require('./routes/getRigById')
const getRigByModelRouter = require('./routes/getRigByModel')
const createRigRouter = require('./routes/createRig')
const updateRigRouter = require('./routes/updateRig')
const deleteRigRouter = require('./routes/deleteRig')
const apiExternaRouter = require('./routes/apiExterna')



app.use(express.json())
app.use(cors())
app.use(logger('dev'))

const { connectDB } = require('./db/db')

app.use('/', indexRouter)
app.use('/getRig', getRouter)
app.use('/getRigById', getRigByIdRouter)
app.use('/getRigByModel', getRigByModelRouter)
app.use('/createRig', createRigRouter)
app.use('/updateRig', updateRigRouter)
app.use('/deleteRig', deleteRigRouter)
app.use('/apiExterna', apiExternaRouter)


connectDB()

module.exports = app