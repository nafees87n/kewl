const mongoose = require("mongoose");
require('dotenv').config(); 
mongoose.connect(
  `mongodb+srv://kewl1test:${process.env.DBPASS}@kewl1test.ttn3a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const roomSchema = new mongoose.Schema({
  id:{
    type:Number,
  },
  name:{
    type:String,
  },
  description:{
    type:String,
  }
});

const Room = mongoose.model("kewl", roomSchema);

module.exports = Room;


// const mongoose = require("mongoose");
// require('dotenv').config(); 
// mongoose.connect(
//   `mongodb+srv://kewl1test:${process.env.DBPASS}@kewl1test.ttn3a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const userSchema = new mongoose.Schema({
//   id:{
//     type:Number,
//   },
//   email: {
//     type: String,
//     lowercase: true,
//   },
//   name:{
//     type:String,
//   },
//   firstname:{
//     type:String,
//   },
//   lastname:{
//     type:String,
//   },
//   imageurl:{
//     type:String
//   }
// });

// const User = mongoose.model("user", userSchema);

// module.exports = User;
