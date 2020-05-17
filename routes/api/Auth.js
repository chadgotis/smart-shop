const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("./validation");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(401).json(error.details[0].message);
  const userExist = await User.findOne({ username: req.body.username });

  //   hash
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  if (userExist) {
    return res.status(401).json({ message: "user already exists" });
  }

  try {
    const newUser = new User({
      username: req.body.username,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(401).json({ message: error });

  const userExist = await User.findOne({ username: req.body.username });
  if (!userExist) return res.status(404).json({ message: "user not found" });

  const validPass = await bcrypt.compare(req.body.password, userExist.password);
  if (!validPass)
    return res.status(401).json({ message: "password not valid" });

  res.send("LOGGED IN!!!!");
});

module.exports = router;
