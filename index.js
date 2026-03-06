require("dotenv").config(); // Load .env variables
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");

// Use PORT from environment for Render
const port = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30s timeout
  })
  .then(() => console.log("MongoDB Atlas connected successfully".blue))
  .catch((err) => console.log("MongoDB connection error:", err));

// Session config
const sessionConfig = {
  secret: process.env.SECRET || "fallbackSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  },
};

// Passport setup
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");

// EJS & Middleware
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// Routes middleware
app.use("/products", productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(port, () => console.log(`Server listening at ${port}`.red));
