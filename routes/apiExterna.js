const express = require('express')
const router = express.Router()
const apiExterna  = require('../controllers/apiExternaController')

router.get('/pokemon/:nombre', apiExterna)

module.exports = router
