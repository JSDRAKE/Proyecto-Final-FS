const express = require('express')
const router = express.Router()
const getRigsController = require('../controllers/getRigsController')

router.get('/:model', getRigsController.getrigBymodel)

module.exports = router