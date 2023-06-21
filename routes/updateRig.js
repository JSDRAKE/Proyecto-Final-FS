const express = require('express')
const router = express.Router()
const updateRig = require('../controllers/updateRigController')

router.put('/', updateRig)

module.exports = router
