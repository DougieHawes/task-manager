const router = require("express").Router();

const auth = require("../../middleware/auth");

const Item = require("../../models/Item");
const User = require("../../models/User");

router.post("/", [auth], async (req, res) => {
  const { message, doers, reward } = req.body;

  try {
    const user = await User.findById(req.user.id).select("-password");

    if (user.status !== "admin") {
      console.log("user unauthorised");
      return res.status(400).json({ msg: "user unauthorised" });
    }

    const doersArray = doers.split(" ");

    const newItem = new Item({
      creator: user.name,
      message,
      doers: doersArray,
      reward,
    });

    await newItem.save();

    res.status(200).json({ msg: "item submitted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "server error" });
  }
});

module.exports = router;
