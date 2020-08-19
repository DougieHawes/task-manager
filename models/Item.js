const mongoose = require("mongoose");

const itemModel = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  message: {
    type: String,
    required: true,
  },
  doers: {
    type: [String],
    required: true,
  },
  reward: {
    type: Number,
    default: 2,
  },
  attention: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Item", itemModel);
