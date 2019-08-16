var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('lets see some quotes!');
  res.render('index', {
    title: 'Strickland Ipsum',
    subtitle: 'Placeholder text and placeholder text accessories since 2019'
  });
});

module.exports = router;
