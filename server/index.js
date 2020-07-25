const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const User= require('./db/db');
// const newUser=new User({
//     email:'nafees@gmail.com'
// });
// newUser.save();
const d={
    name:"NAfees",
    age:19
}
app.get('/foo',(req,res)=>{
    res.send(d);
})
app.post('/goo',(req,res)=>{
    console.log("data in server  ",req.body);
    res.send("Success")
})
const port= process.env.PORT || 5000;
app.listen(port,console.log(`Server started at port ${port}`));