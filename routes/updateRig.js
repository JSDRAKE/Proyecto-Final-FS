const express = require('express')
const router = express.Router()
const updateRigController = require('../controllers/updateRigController')
const { validateId } = require('../middlewares/validateId')
const checks  = require('../middlewares/checks')
const { validateChecks } = require('../middlewares/validateChecks')

router.put('/:id', validateId, checks, validateChecks, updateRigController.updateRig)

module.exports = router
