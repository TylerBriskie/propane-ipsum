var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/form', function(req, res, next) {
    console.log('hi')
    res.render('index', {
        title: 'Strickland Ipsum',
        subtitle: 'Placeholder text and placeholder text accessories since 2019'
    });
});

module.exports = router;
