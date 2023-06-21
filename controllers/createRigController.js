const { Rigs } = require('../models/rig')

const createRig = async (req, res) => {

    try {

        const rig = await Rigs.create(req.body)
        
        await rig.save()

        return res.status(201).json({rig})

    } catch (error) {

        return res.status(400).json({error})

    }

}

module.exports = createRig