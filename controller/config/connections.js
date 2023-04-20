const Sequelize = require('sequelize')

require('dotenv').config()

let sequelize;

if(process.env.CYCLIC_URL){
    sequelize = new Sequelize(process.env.CYCLIC_DB, process.env.CYCLIC_APP_ID,process.env.CYCLIC_URL, CYCLIC_BUCKET_NAME
    //     {
    //     dialect:  'mysql',
    //     protocol: 'mysql',
    //     logging:  true 
    // }
    ) 
} else {
    sequelize = new Sequelize(
        // process.env.CYCLIC_URL,
        process.env.mysql_database_name, 
        process.env.mysql_user, 
        process.env.mysql_password, 
        {
            // host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}



module.exports = sequelize