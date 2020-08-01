const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios").default;
// const login = require("./routes/login");
const dotenv = require("dotenv");
dotenv.config();
// implementing socket.io next

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const User = require("./db/db");
// const newUser=new User({
//     email:'nafees@gmail.com'
// });
// newUser.save();
// app.use('/login',login);
const u = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=http://localhost:5000&prompt=consent&client_id=${process.env.CLIENTID}`;

app.get("/login", (req, res) => {
  res.redirect(u);
});
app.get("/", (req, res) => {
  //   console.log(req.query.code);
  var act;
  axios
    .post("https://oauth2.googleapis.com/token", {
      code: req.query.code,
      client_id: process.env.CLIENTID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "http://localhost:5000",
      grant_type: "authorization_code",
    })
    .then((res) => {
    //   console.log(res.data.access_token);
      act=res.data.access_token;
    //   axios
        // .get(
        //   `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${res.data.access_token}`
        // )
        // .then((res) => console.log(res.data));
    }).then(console.log(act));
//   var naf = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${act}`;
//   console.log(naf);
  // axios.get(naf)
  // .then(res=>console.log(res));
  // .catch(console.log("ERROR"));
  // .catch((err) => console.log(err));
  //   console.log(req.query);
  res.send("HII");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started at port ${port}`));
