const Sequelize = require('sequelize')

const sequelizeConnect = new Sequelize(
    process.env.mysql_name, 
    process.env.mysql_user, 
    process.env.mysql_password, 
    {
        host: "localhost",
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = sequelizeConnect