var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', {
        title: 'Add a quote',
    });
});

router.post('/newQuoteForm', (req, res, next)=> {
    console.log('POSTING RECEIVED, req: ', req.body);


});

module.exports = router;
