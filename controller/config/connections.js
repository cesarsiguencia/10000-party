const Sequelize = require('sequelize')

require('dotenv').config()

let sequelize;

sequelize = new Sequelize(
    process.env.mysql_database_name, 
    process.env.mysql_user, 
    process.env.mysql_password, 
    {
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = sequelize