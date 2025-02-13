const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
const users = [];

module.exports = { User, users };
