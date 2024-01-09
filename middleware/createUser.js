const User = require("../models/user").User;

module.exports = async function(req, res, next) {
  res.locals.user = null
  // try {
  //   const user = await User.findById(req.session.user).exec();
  //   if (!user) {
  //     res.locals.user = null;
  //   } else {
  //     res.locals.user = user;
  //   }
  //   next();
  // } catch (err) {
  //   next(err);
  // }
  next();
};