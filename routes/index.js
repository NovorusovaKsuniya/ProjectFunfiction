var express = require('express');
var router = express.Router();
const Char = require("../models/character").Char;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Char.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', menu:menu, counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
});
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password

});

module.exports = router;