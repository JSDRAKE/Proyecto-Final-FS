const express = require('express')
const router = express.Router()
const deleteRig = require('../controllers/deleteRigContoller')

router.delete('/', deleteRig)

module.exports = router