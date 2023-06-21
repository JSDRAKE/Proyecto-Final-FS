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

        type : String,
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

        type : String,
        required: true

    },

    img : {

        type : String,
        required: true

    },

})

const Rigs = model('Rig', rigSchema)

module.exports = { Rigs }
