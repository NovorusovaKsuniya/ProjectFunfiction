var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/all")
var User = require("./models/user.js").User
var first_user = new User({
username: "Vasya",
password: "qwerty"
})

first_user.save().then((user) => {
    console.log(user);
  }).catch((err) => {
    throw err;
  });