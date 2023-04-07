const router = require("express").Router()

const apiRoutes = require("./api/indexApi")
const htmlRoutes = require("./html/indexHtml")

router.use('/api', apiRoutes)
router.use('/', htmlRoutes)

router.use((req,res) => {
    res.status(404).end();
})

module.exports = router