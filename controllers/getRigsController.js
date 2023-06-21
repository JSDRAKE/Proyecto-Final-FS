const { Rigs } = require('../models/rig');

const getRig = {

    async getRigs(req, res) {

        try {

            const rigs = await Rigs.find()

            return res.status(200).json({ rigs })

        } catch (error) {

            return res.status(400).send(error)

        }

    },

    async getRigByModel(req, res) {

        try {

            const model = await Rigs.findOne({ model: req.params.model })

            return res.status(200).json({ model })

        } catch (error) {

            return res.status(400).send(error)

        }

    },

    async getRigbyId(req, res) {

        try {

            const rigId = await Rigs.findById(req.params.id)

            return res.status(200).json({ rigId })

        } catch (error) {

            return res.status(400).send(error)

        }

    }

}

module.exports = getRig