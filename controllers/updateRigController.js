const { Rigs } = require('../models/rig')

const updateRigController = {

    async updateRig (req, res) {

        try {

            await Rigs.findByIdAndUpdate(req.params.id, req.body)

            res.status(200).json({ msg: 'Rig updated' })

        } catch (error) {

            return res.status(400).json(error)

        }

    }

}

module.exports = updateRigController