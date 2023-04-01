const express = require('express')

const sequelize = require ('./controller/config/connections')

const app = express()

const PORT = process.env.PORT || 3300

//middleware for json and it's key/values
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json('working file')
})

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))