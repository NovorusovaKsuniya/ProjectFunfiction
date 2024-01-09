var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Tree.find({}, { _id: 0, title: 1, nick: 1 });
    res.cookie('greeting','Hi!!').res.render('index', {
      title: 'Express',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
