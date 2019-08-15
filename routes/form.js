const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Character = require('../models/Character');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("cookie? : ", req.cookies);

    let characterArray = [];


    jwt.verify(req.cookies.token, 'DangOlYoManTalkinBoutTryinaHackMyMainframe', (err, decoded) => {
        if (decoded){
            console.log('welcome t-bone');
            Character.find().then((characters)=> {
                if (characters){
                    console.log('characters:', characters);
                    for (let i =0; i< characters.length;i++){
                        // console.log('character found: ', character);
                        characterArray.push(characters[i].name);
                    }
                } else {

                }
            }).then(()=>{
                res.render('form', {
                    characters: characterArray,
                    title: 'Add a quote',
                });
            });

        } else {
            res.redirect('/auth');
        }
    });


});

router.post('/newQuoteForm', (req, res, next)=> {
    console.log('POSTING RECEIVED, req: ', req.body);


});

module.exports = router;
