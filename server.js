const express = require('express')

require('dotenv').config()

const path = require('path')

const sequelize = require ('./controller/config/connections')

const exphbs = require('express-handlebars')

const hbs = exphbs.create({})

const routes = require('./controller/routes')

const app = express()

const PORT = 4000 || process.env.PORT



app.use(express.static(path.join(__dirname, 'assets')))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
//middleware for json and it's key/values
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(routes)


// app.get('/', (req, res) => {
//     res.json('working file')
// })

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))