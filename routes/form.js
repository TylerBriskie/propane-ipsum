const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("cookie? : ", req.cookies);
    jwt.verify(req.cookies.token, 'DangOlYoManTalkinBoutTryinaHackMyMainframe', (err, decoded) => {
        if (decoded){
            console.log('welcome t-bone');
        } else {
            res.redirect('/login');
        }
    })

    res.render('form', {
        title: 'Add a quote',
    });
});

router.post('/newQuoteForm', (req, res, next)=> {
    console.log('POSTING RECEIVED, req: ', req.body);


});

module.exports = router;
