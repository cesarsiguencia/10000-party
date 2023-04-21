const { Sequelize } = require('sequelize')

require('dotenv').config()



// if(process.env.CYCLIC_URL){
//     sequelize = new Sequelize(process.env.CYCLIC_DB, process.env.CYCLIC_APP_ID,process.env.CYCLIC_URL,
//         // , CYCLIC_BUCKET_NAME
//         {
//         dialect:  'mysql'
//         // protocol: 'mysql',
//         // logging:  true
//     }
//     ) 
// } else {
const sequelize = new Sequelize(
        {     
            username: process.env.DB_USER, 
            password: process.env.DB_PASSWORD, 
            database: process.env.DB_NAME,
            dialect: 'mysql',
            port: process.env.DB_PORT,
            host: process.env.DB_HOST
        }
    )

module.exports = sequelize