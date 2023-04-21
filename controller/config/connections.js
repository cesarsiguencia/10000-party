const { Sequelize } = require('sequelize')





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
            
            username: process.env.MYSQLUSER, 
            password: process.env.MYSQLPASSWORD, 
            database: process.env.MYSQLDATABASE,
            dialect: 'mysql',
            port: process.env.MYSQLPORT,
            host: process.env.MYSQLHOST
        }
    )

module.exports = sequelize