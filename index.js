const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const login = require('./server/routes/login');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use('/login', login);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, console.log(`Server started at port ${port}`));
