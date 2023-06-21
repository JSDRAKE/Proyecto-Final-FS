const { Rigs } = require('../models/rig')

const createRigController = {

    async createRig (req, res)  {

        try {

            const newRig = new Rigs(req.body)

            await newRig.save()

            res.status(201).json({ newRig })

        } catch (error) {

            res.status(400).json({ error })

        }

    }

}

module.exports = createRigController