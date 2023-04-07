const router = require('express').Router()


router.get('/', (req,res) => {
    // User.findAll({
    //     attributes: {exclude: ['password']}
    // })
    //     .then(usersFromDb => res.json(usersFromDb))
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })

    res.render('homepage')
    
});

module.exports = router