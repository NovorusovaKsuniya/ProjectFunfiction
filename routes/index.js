var express = require('express');
var router = express.Router();
const Char = require("../models/character").Char;
var User = require("./../models/user").User

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
  User.findOne({username:username},function(err,user){
      if(err) return next(err)
        if(user){
          if(user.checkPassword(password)){
          req.session.user = user._id
          res.redirect('/')
        } else {
          res.render('logreg', {title: 'Вход'})
      }
    } else {
      var user = new User({username:username,password:password})
      user.save(function(err,user){
        if(err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  })
});
module.exports = router;