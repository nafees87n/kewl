const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(
  `mongodb+srv://kewl1test:${process.env.DBPASS}@kewl1test.ttn3a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
  },
  name:{
    type:String,
    lowercase:true,
  },
  firstname:{
    type:String,
    lowercase:true,
  },
  lastname:{
    type:String,
    lowercase:true,
  },
  imageurl:{
    type:String
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
