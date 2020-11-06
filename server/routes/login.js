const express = require('express');

const router = express.Router();
require('dotenv').config();
const axios = require('axios').default;
// const User = require("../db/db");

router.get('/redirect', async (req, res) => {
  // console.log("REQ CODE", req.query.code); //what is this code
  const idToken = await axios
    .post('https://oauth2.googleapis.com/token', {
      code: req.query.code,
      client_id: process.env.CLIENTID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: `http://tranquil-chamber-48344.herokuapp.com/login/redirect`,
      grant_type: 'authorization_code'
    })
    .then((back) => back.data.id_token)
    .catch((e) => console.log('ERROR', e));
  // document.cookie(`chatToken=${idToken}`);
  // console.log("ACCESS",accessToken)
  // .catch(err=>console.log("err"));
  // console.log(token);
  // console.log("HII");
  res.cookie('chatToken', idToken);
  res.send({ token: idToken });
});
// app.post('/form', (req, res) => {
//   const { name, about } = req.body;
//   const newRoom = new Room({
//     name,
//     description: about
//   });
//   newRoom.save();
//   res.send({ ok: true });
// });
module.exports = router;
