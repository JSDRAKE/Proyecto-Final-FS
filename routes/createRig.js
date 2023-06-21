const express = require('express')
const router = express.Router()
const createRig = require('../controllers/createRigController')

router.post('/', createRig)

module.exports = router