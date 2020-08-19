const router = require("express").Router();

const jwt = require("jsonwebtoken");

const User = require("../../models/User");

router.get("/", (req, res) => {
  res.send("user route");
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "5 days" },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
});

module.exports = router;
