const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

// ===== Register Form =====
router.get("/register", (req, res) => {
  res.render("auth/Signup");
});

// ===== Register User =====
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, email });
    const newUser = await User.register(user, password); // can throw error
    req.flash("success", `${username.toUpperCase()}, registered successfully!`);
    res.redirect("/login");
  } catch (err) {
    console.error("Signup error:", err);
    req.flash("error", err.message || "Signup failed. Try again!");
    res.redirect("/register");
  }
});

// ===== Login Form =====
router.get("/login", (req, res) => {
  res.render("auth/Login");
});

// ===== Login User =====
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    failureMessage: true,
  }),
  (req, res) => {
    req.flash("success", `Welcome back, ${req.user.username.toUpperCase()}!`);
    res.redirect("/products");
  }
);

// ===== Logout =====
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    req.flash("success", "Goodbye, see you again!");
    res.redirect("/login");
  });
});

module.exports = router;
