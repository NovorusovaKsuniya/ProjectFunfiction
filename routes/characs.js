const express = require('express');
const router = express.Router();
const Char  = require("../models/character").Char;

// GET запрос по умолчанию
router.get('/', (req, res) => {
  res.send('Новый маршрутизатор для маршрутов с персонажами');
});

// Страница героев
router.get("/:nick", async (req, res, next) => {
  try {
    const ff = await Char.findOne({ nick: req.params.nick });
    if (!ff) {
      throw new Error("Нет такого персонажа в этом фанфике");
    }
    res.render('ff', {
      title: ff.title,
      picture: ff.avatar,
      desc: ff.desc
    });
  } catch (err) {
    next(err);
  }
});


module.exports = router;