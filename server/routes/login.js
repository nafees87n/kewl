const express = require('express');

const router = express.Router();
require('dotenv').config();

const { OAuth2Client } = require('google-auth-library');
const axios = require('axios').default;
// const User = require("../db/db");
const client = new OAuth2Client(process.env.CLIENTID);
router.post('/google', async (req, res) => {
  const { tokenId } = req.body;
  const email = await client
    .verifyIdToken({ idToken: tokenId, audience: process.env.client_id })
    .then((response) => {
      return response.payload.email;
    });
  res.cookie('chatemail', email);
  res.cookie('chatToken', tokenId);
  res.send('OK');
});
router.get('/redirect', async (req, res) => {
  // console.log("REQ CODE", req.query.code); //what is this code
  const idToken = await axios
    .post('https://oauth2.googleapis.com/token', {
      code: req.query.code,
      client_id: process.env.CLIENTID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: `https://tranquil-chamber-48344.herokuapp.com/login/redirect`,
      grant_type: 'authorization_code'
    })
    .then((back) => back.data.id_token);
  // .catch((e) => console.log('ERROR', e));
  // document.cookie(`chatToken=${idToken}`);
  // console.log("ACCESS",accessToken)
  // .catch(err=>console.log("err"));
  // console.log(token);
  // console.log("HII");
  res.cookie('chatToken', idToken);
  res.redirect(200, '/dashboard');
  // res.send({ token: idToken });
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
