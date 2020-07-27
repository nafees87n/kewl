const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const login=require('./routes/login');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const User = require("./db/db");
// const newUser=new User({
//     email:'nafees@gmail.com'
// });
// newUser.save();
app.use('/login',login);
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started at port ${port}`));
