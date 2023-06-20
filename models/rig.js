const { Schema, model } = require('mongoose')

const rigSchema = new Schema({
    brand: {

        type : String,
        required: true

    },

    model: {

        type : String,
        required: true

    },

    type: {

        type : String,
        required: true

    },

    frecuencyRange : {

        type : Number,
        required: true

    },

    mode : {

        type : String,
        required: true

    },

    powerSupply : {

        type : String,
        required: true

    },

    manufactured : {

        type : Date,
        required: true

    }

})

const Rig = model('Rig', rigSchema)

module.exports = Rig
