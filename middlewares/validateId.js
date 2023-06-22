const { Rigs } = require('../models/rig');

const validateId = async (req, res, next) => {

    try {

        const search = await Rigs.findById(req.params.id)

        if (search !== null) {

            next()

        } else {

            res.status(401).json({ message: 'ID does not exist' })
        }
        
    } catch (error) {

        res.status(401).json(error)
        
    }

}

module.exports = { validateId }