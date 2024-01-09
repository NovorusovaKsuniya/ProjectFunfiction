const Char = require("./../models/character").Char;

module.exports = async function(req, res, next) {
  try {
    res.locals.nav = [];
    const result = await Char.find({}, { _id: 0, title: 1, nick: 1 });
    res.locals.nav = result;
    next();
  } catch (err) {
    throw err;
  }
};