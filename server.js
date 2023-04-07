const express = require('express')

const path = require('path')

const sequelize = require ('./controller/config/connections')

const exphbs = require('express-handlebars')

const hbs = exphbs.create({})

const routes = require('./controller/routes')

const app = express()

const PORT = process.env.PORT || 3300



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

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))