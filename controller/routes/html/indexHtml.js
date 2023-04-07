const router = require('express').Router()

const homeRoutes = require('./homepage')

router.get('/', (req,res) => {
    res.render("intro")
})

router.use('/home', homeRoutes)

module.exports = router