const mongoose = require("mongoose");
const crypto = require("crypto");

const schemaUser = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

schemaUser.virtual("password").set(async function(password) {
  this._purePassword = password;
  this.salt = Math.random() + "";
  this.hashedPassword = this.encryptPassword(password);
}).get(function() {
  return this._purePassword;
});

schemaUser.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schemaUser.methods.checkPassword = function(password) {
  const hashedPassword = crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  return this.hashedPassword === hashedPassword;
};

module.exports.User = mongoose.model("User", schemaUser);