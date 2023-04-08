const router = require('express').Router()

const homeRoutes = require('./homepage')

const registerRoutes = require('./registration')

router.get('/', (req,res) => {
    res.render("intro")
})

router.use('/home', homeRoutes)

router.use('/register', registerRoutes)

module.exports = router