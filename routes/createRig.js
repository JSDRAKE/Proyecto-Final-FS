const express = require('express')
const router = express.Router()
const createRigController = require('../controllers/createRigController')

router.post('/', createRigController.createRig)

module.exports = router