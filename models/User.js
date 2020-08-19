const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "user",
  },
  tokens: {
    type: Number,
    default: 0,
  },
});

module.exports = new mongoose.model("User", userModel);
