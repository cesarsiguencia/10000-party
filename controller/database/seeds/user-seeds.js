const  User  = require('../../../models/User')

const userData = [
    {   
        first_name:"Cesar",
        last_name:"Siguencia",
        username: "cezzienyc",
        email: "cesar@gmail.com",
        password: 'abcd1234'
    },
    {
        first_name:"Paul",
        last_name:"Whits",
        username: "pablo",
        email: "pablo@gmail.com",
        password: '1234abcd'
    },
    {
        first_name:"John",
        last_name:"Meds",
        username: "johnjes",
        email: "john@gmail.com",
        password: 'password'
    },
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = {
    userSeeds
} 