const Sequelize = require('sequelize')

require('dotenv').config()

let sequelize;

if(process.env.CYCLIC_URL){
    sequelize = new Sequelize(process.env.CYCLIC_URL, {
        dialect:  'mysql',
        protocol: 'mysql',
        logging:  true //false
    }) 
} else {
    sequelize = new Sequelize(
        process.env.CYCLIC_URL,
        process.env.mysql_database_name, 
        process.env.mysql_user, 
        process.env.mysql_password, 
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}



module.exports = sequelize