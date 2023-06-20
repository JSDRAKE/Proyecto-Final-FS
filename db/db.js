const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connectDB = async () => {

    try {
       
        await mongoose.connect(process.env.MONGO_CNN)

        console.log('MongoDB connection SUCCESS')

    } catch (error) {

        console.error('MongoDB connection FAIL')
       
    }
}

module.exports = { connectDB }