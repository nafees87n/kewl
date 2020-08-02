const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios").default;
const User = require("../db/db");

router.get("/redirect", async (req, res) => {
  const accessToken = await axios
    .post("https://oauth2.googleapis.com/token", {
      code: req.query.code,
      client_id: process.env.CLIENTID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "http://localhost:5000/login/redirect",
      grant_type: "authorization_code",
    })
    .then((res) => res.data.access_token)
    .catch(err=>console.log(err));
  // console.log(token);
  // console.log("HII");
  const info = await axios
    .get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch(console.log("Error2"));
  // console.log("NICe",info);
  const existingUser = await User.findOne({ id: info.id });
  if (existingUser) {
    console.log("FOUND");
  } else {
    const newUser = new User({
      id: info.id,
      name: info.name,
      firstname: info.given_name,
      lastname: info.family_name,
      email: info.email,
      imageurl: info.picture,
    });
    await newUser.save();
    console.log("NEW USER ADDED");
  }
});

module.exports = router;
