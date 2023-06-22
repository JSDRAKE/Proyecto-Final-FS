const { Rigs } = require('../models/rig');

const getRigsController = {

    async getRigs(req, res) {

        try {

            const rigs = await Rigs.find()

            res.status(200).json(rigs)

        } catch (error) {

            res.status(400).send(error)

        }

    },

    async getRigByModel(req, res) {

        try {

            const model = await Rigs.findOne({ model : req.params.model.toUpperCase() })

            res.status(200).json({ model })

        } catch (error) {

            res.status(400).send(error)

        }

    },

    async getRigbyId(req, res) {

        try {

            const rigId = await Rigs.findById(req.params.id)

            res.status(200).json(rigId)

        } catch (error) {

            res.status(400).send(error)

        }

    }

}

module.exports = getRigsController 