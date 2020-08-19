const router = require("express").Router();

const auth = require("../../middleware/auth");

const Reward = require("../../models/Reward");
const User = require("../../models/User");

router.post("/", [auth], async (req, res) => {
  const { message, value } = req.body;

  try {
    const user = await User.findById(req.user.id).select("-password");

    if (user.status !== "admin") {
      console.log("user unauthorised");
      return res.status(400).json({ msg: "user unauthorised" });
    }

    const newReward = new Reward({
      message,
      value,
    });

    await newReward.save();

    res.status(200).json({ msg: "reward submitted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
