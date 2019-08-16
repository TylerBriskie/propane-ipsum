let express = require('express');
let router = express.Router();

const Quote = require('../models/Quote');
/* GET home page. */
router.get('/', function(req, res, next) {
  // GET quotes
  let formattedHeadings = [];
  let formattedSubheadings = [];
  let formattedQuotes = [];

  Quote.aggregate([{$sample: { size: 40 }}]).then((quotes)=> {
    for (let i = 0; i<quotes.length; i++){
      switch (quotes[i].length){
        case "LONG":
          formattedQuotes.push(quotes[i].quote);

          break;
        case "MEDIUM":
          formattedSubheadings.push(quotes[i].quote);
          console.log("med boy: ", quotes[i].quote);
          break;
        case "SHORT":
          formattedHeadings.push(quotes[i].quote);
          break;
        default:
          formattedQuotes.push(quotes[i].quote);
      }
    }
    console.log('FORMATTED QUOTES: ', formattedQuotes);
    res.render('index', {
      title: 'Strickland Ipsum',
      subtitle: 'Placeholder text and placeholder text accessories since 2019',
      headings: formattedHeadings,
      subHeadings: formattedSubheadings,
      quotes: formattedQuotes,
    });
  });



});

module.exports = router;
