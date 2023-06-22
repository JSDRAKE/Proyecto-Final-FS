const express = require('express')
const router = express.Router()
const deleteRigContoller = require('../controllers/deleteRigContoller')
const { validateId } = require('../middlewares/validateId')

router.delete('/:id', validateId, deleteRigContoller.deleteRig)

module.exports = router