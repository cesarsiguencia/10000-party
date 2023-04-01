const  User  = require('../../../models/User')

const userData = [
    {
        username: "cezzienyc",
        email: "cesar@gmail.com",
        password: 'abcd1234'
    },
    {
        username: "pablo",
        email: "pablo@gmail.com",
        password: '1234abcd'
    },
    {
        username: "john",
        email: "john@gmail.com",
        password: 'password'
    },
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = {
    userSeeds
} 