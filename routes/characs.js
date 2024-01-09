const express = require('express');
const router = express.Router();
const Char  = require("../models/character").Char;
var async = require("async")


// GET запрос по умолчанию
router.get('/', (req, res) => {
  res.send('Новый маршрутизатор для маршрутов с персонажами');
});

// Страница героев
router.get('/:nick', async function(req, res, next) {
    try {
      const [char, chars] = await Promise.all([
        Char.findOne({ nick: req.params.nick }),
        Char.find({}, { _id: 0, title: 1, nick: 1 })
      ]);
    
      if (!char) {
        throw new Error("Нет такого персонажа");
      }
      
      renderChar(res, char.title, char.avatar, char.desc, chars);
    } catch (err) {
      next(err);
    }
  });


  function renderChar(res, title, picture, desc, chars) {
    console.log(chars);
    res.render('ff', {
      title: title,
      picture: picture,
      desc: desc,
      menu: chars
    });
  }

module.exports = router;