var express = require('express');
var router = express.Router();

/* LOGIN page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'Login',
    });
});

router.post('/', (req, res, next)=> {
    console.log('LOGIN RECEIVED, req: ', req.body);
});

module.exports = router;
