const mongoose = require("mongoose");

const rewardModel = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Reward", rewardModel);
