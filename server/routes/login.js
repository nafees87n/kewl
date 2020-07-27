const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const User = require("../db/db");
router.post("/", async (req, res) => {
  let token = req.body.token;
  let googleUser;
  try {
    googleUser = jwt.decode(token, "", true);
  } catch {
    console.log("error");
    res.send({ error: "error" });
    return;
  }
  let existingUser = await User.findOne({ email: googleUser.email });
  if (existingUser) {
    console.log("Found");
  } else {
    const newUser = new User({
      name: googleUser.name,
      firstname: googleUser.given_name,
      lastname: googleUser.family_name,
      email: googleUser.email,
      imageurl: googleUser.picture,
    });
    await newUser.save();
    console.log("SUCCESS");
  }
  res.cookie("access_token", token, {
    httpOnly: false,
  });
  res.status(200).json({ success: true });
});

module.exports = router;
