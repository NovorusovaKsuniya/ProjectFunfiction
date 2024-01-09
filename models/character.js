const mongoose = require('mongoose');

const CharSchema = new mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports.Char = mongoose.model("Char", CharSchema)
