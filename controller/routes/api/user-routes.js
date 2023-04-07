const router = require("express").Router();

const { User } = require("../../../models/index")

router.get('/', (req,res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
        .then(usersFromDb => res.json(usersFromDb))
        .catch(err => {
            res.status(500).json(err)
        })
});

module.exports = router;