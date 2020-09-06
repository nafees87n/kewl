const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./routes/login");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
require('dotenv').config(); 
mongoose.connect(
  `mongodb+srv://kewl1test:${process.env.DBPASS}@kewl1test.ttn3a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post('/form', (req, res) => {
  const doc = new Room({ newRoom: req.body.newRoom })
  doc.save();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use("/login", login);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started at port ${port}`));
