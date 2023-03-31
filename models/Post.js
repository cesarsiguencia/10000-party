const { Model, DataTypes } = require('sequelize')
const sequelizeConnect = require('../controller/config')

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Cannot leave blank!'
                }
            }
        },
        post_link: {
            id: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelizeConnect,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post