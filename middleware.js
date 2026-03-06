
module.exports.isLoggedIn = (req, res, next) => {
  console.log("isAuthenticated:", req.isAuthenticated());

  if (!req.isAuthenticated()) {
    req.flash("error", "You need to login first!");
    return res.redirect("/login");
  }

  next();
};
