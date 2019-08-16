const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Character = require('../models/Character');
const Quote = require('../models/Quote');
const QUOTE_LENGTH = {
    long: "LONG",
    medium: "MEDIUM",
    short: "SHORT",
}

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
                        characterArray.push(characters[i]);
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
    let postObject = req.body;
    console.log('post object: ', req.body);

    // Set Length
    if (postObject.quote.length > 100){
        postObject.length = QUOTE_LENGTH.long;
    } else if (postObject.quote.length > 40){
        postObject.length = QUOTE_LENGTH.medium;
    } else if (postObject.quote.length > 1){
        postObject.length = QUOTE_LENGTH.short
    } else {
        res.send("PLEASE ENTER A QUOTE")
    }

    postObject.season = parseInt(req.body.season);

    console.log(postObject);
        res.status(200);
    let quoteObject = new Quote(postObject);


    quoteObject.save((err) => {
        if (err){
            console.log('error!, ', err);
            return;
        }
        console.log('quote SAVED!');
        res.redirect('/form');
    })

});

module.exports = router;
