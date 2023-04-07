const router = require("express").Router()

const routesForUsers = require("./user-routes")

router.use('/users', routesForUsers)

module.exports = router