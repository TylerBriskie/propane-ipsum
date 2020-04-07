const express = require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
require('dotenv').config();

/* LOGIN page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'Login',
    });
});


/* USER LOGIN */
router.post('/login', (req, res, next)=> {

    let userData = req.body;
    console.log('looking up email - "'+userData.username + '"');

    User.findOne({email: userData.username}, (err, user) => {
        if (err){
            console.log("error!  Code 72ne82n90w, error logging in: ", err)
        } else {
            console.log(user);
            if (!user){
                res.status(401).send("Email Not Found");
            } else {
                bcrypt.compare(userData.password, user.password, (err, login) => {
                    if (login){
                        let payload = { subject: user._id};
                        let token = jwt.sign(payload, process.env.JWT_SECRET);
                        res.cookie('token', token);
                        res.redirect('/form');
                    } else {
                        res.status(403).send('password incorrect');
                    }
                })
            }
        }
    })
});

router.post('/logout', (req, res, next) => {
    console.log('logging out!');
    res.clearCookie('token');
    res.redirect('/');
});



module.exports = router;
