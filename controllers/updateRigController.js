const { Rigs } = require('../models/rig')

const updateRig = async (req, res) => {

    try {

        await Rigs.findAndUpdate(req.params.id, req.body)

        res.status(200).json({ message: 'Rig updated' })

    } catch (error) {

        return res.status(400).json({ error })
        
    }

}

module.exports = updateRig