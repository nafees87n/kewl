const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./routes/login");
const cookieParser = require("cookie-parser");
const Room = require("./db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use("/login", login);

app.post("/form", (req, res) => {
  const { name, about } = req.body;
  const newRoom = new Room({
    name,
    description: about,
  });
  newRoom.save();
  res.send({ok:true})
});


const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started at port ${port}`));
