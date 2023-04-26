const express = require('express')

require('dotenv').config()

const path = require('path')

const sequelize = require ('./controller/config/connections')

const exphbs = require('express-handlebars')

const hbs = exphbs.create({})

const routes = require('./controller/routes')

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, 'assets')))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
//middleware for json and it's key/values
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(routes)

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})