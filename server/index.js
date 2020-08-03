const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./routes/login");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
// implementing socket.io next

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use("/login", login);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started at port ${port}`));
