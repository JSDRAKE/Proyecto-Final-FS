const express = require('express')
const router = express.Router()
const updateRigController = require('../controllers/updateRigController')

router.put('/:id', updateRigController.updateRig)

module.exports = router
