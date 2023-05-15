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

router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        }
    }).then(userFromDb => {
        if(!userFromDb){
            res.status(404).json({ message: 'User does not exist'})
            return;
        }
        res.json(userFromDb)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('./register', (req, res){
    User.create({
        first_name: req.body.form_first_name,
        last_name: req.body.form_last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then((newUser => {
            res.json(newUser)
            console.log(newUser)
        }))
})

module.exports = router;