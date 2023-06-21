const { Rigs } = require('../models/rig')

const deleteRig = async (req, res) => {

    try {

        const rig = await Rigs.findByIdAndDelete(req.params.id)

        return res.status(200).json({ rig })

    } catch (error) {

        return res.status(400).json({ error })

    }

}

module.exports = deleteRig