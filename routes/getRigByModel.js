const express = require('express')
const router = express.Router()
const getRigsController = require('../controllers/getRigsController')
const { validateModel } = require('../middlewares/validateModel')

router.get('/:model', validateModel, getRigsController.getRigByModel)

module.exports = router