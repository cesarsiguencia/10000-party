const { Sequelize } = require('sequelize')

require('dotenv').config()

let sequelize;

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
    sequelize = new Sequelize(
        // process.env.CYCLIC_URL,

        {
             
            username: process.env.mysql_user, 
            password: process.env.mysql_password, 
            database: process.env.mysql_database_name,
            dialect: 'mysql',
            port: process.env.mysql_port,
            host: process.env.mysql_port
            
        }
    )
// }



module.exports = sequelize