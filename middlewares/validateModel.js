const { Rigs } = require('../models/rig')

const validateModel = async (req, res, next) => {

    try {

        const searchModel = await Rigs.findOne({ model: req.param.model.toUpperCase() })

        if ( searchModel !== null ) {

            next()

        } else {

            res.status(401).json({ msg: 'Model already exists' })

        }

    } catch (error) {

        res.status(401).json(error)

    }

}

module.exports = { validateModel }