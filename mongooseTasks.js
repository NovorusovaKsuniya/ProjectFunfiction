const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Replika1');
var Char = require("./models/character").Char

var ff = new Char({
    title: "Кефер",
    nick: "Kefer"
    })
    console.log(ff)
    ff.save().then(() => {
    console.log(ff.title);
  })