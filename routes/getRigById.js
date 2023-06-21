const express = require('express')
const router = express.Router()
const getRigsController = require('../controllers/getRigsController')

router.get('/:id', getRigsController.getRigbyId)

module.exports = router