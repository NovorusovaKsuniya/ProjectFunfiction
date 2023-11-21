var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/opr', function(req, res, next) {
  res.send("<h1>Что токое Фанфик?</h1>")
  });
  router.get('/hs', function(req, res, next) {
    res.send("<h1>Каника</h1>")
    });
    router.get('/ZF', function(req, res, next) {
      res.send("<h1>Кефер - Фараон золотого города.</h1>")
      });
module.exports = router;
