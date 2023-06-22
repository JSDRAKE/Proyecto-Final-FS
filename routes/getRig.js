const express = require('express')
const router = express.Router()
const getRigsController = require('../controllers/getRigsController')


router.get('/', getRigsController.getRigs)

module.exports = router