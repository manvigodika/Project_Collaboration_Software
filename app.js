const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const {
  requireAuth,
  requireGuest,
  checkUser,
} = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

//database connection

connectDB();

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));

app.use(authRoutes);
app.use("/", require("./routes/indexRoutes"));
app.use("/", require("./routes/emailService"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
