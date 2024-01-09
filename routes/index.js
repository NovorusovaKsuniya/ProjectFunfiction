var express = require('express');
var router = express.Router();
const Char = require("../models/character").Char;
//var User = require("./../models/user").User
var db = require('../mySQLConnect.js');


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

router.get('/logreg', async function(req, res, next) {
  res.render('logreg', { title: 'Вход',error:null}); 
});

router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`,
    function(err,users){
      if(err) return next(err)
      if(users.length > 0) {
          var user = users[0];
        if (password == user.password){
          req.session.user = user.id
          res.redirect('/')
        } else {
          res.render('logreg', {title: 'Вход'})
        }
      } else {
        db.query(`INSERT INTO user (username, password) VALUES ('${username}','${password}')`, function(err, user){
      if(err) return next(err)
      req.session.user = user.id
      res.redirect('/')
    })
  }
  })
});

router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

module.exports = router;