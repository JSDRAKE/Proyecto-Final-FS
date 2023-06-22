const { validationResult } = require('express-validator')

const validateChecks = (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        res.status(400).json(errors)

    }else {

        next()
    }

}

module.exports = { validateChecks }