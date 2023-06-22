const express = require('express')
const router = express.Router()
const createRigController = require('../controllers/createRigController')
const checks  = require('../middlewares/checks')
const { validateChecks } = require('../middlewares/validateChecks')


router.post('/', checks, validateChecks,  createRigController.createRig)

module.exports = router