const express = require('express')
const router = express.Router()
const getRigsController = require('../controllers/getRigsController')
const { validateId } = require('../middlewares/validateId')

router.get('/:id', validateId, getRigsController.getRigbyId)

module.exports = router