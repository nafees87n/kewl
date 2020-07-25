const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kewl1test:kewl1test@kewl1test.ttn3a.mongodb.net/user?retryWrites=true&w=majority",
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
  firstname:{
    type:String,
    lowercase:true,
  },
  lastname:{
    type:String,
    lowercase:true,
  },
  googleid:{
    type:String,
  },
  imageurl:{
    type:String
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
