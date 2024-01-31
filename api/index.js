const dotenv = require("dotenv");
const userModel = require("./user.model.js")
const express = require("express")
const router = express();

dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB)
.then(() =>{
    console.log("MongoDB is Connected");
})
.catch((err)=>{
    console.log(err);
})

router.get("/", function(req, res){
    res.send("hello, I am backend")
})

router.get("/about", function(req, res){
    res.send("hello from about")
})

router.get("/create", function(req, res){
    const alluser = userModel.create({
        username: "max",
        email: "text@mail.com",
        password: "arjun"
    })
    res.send(alluser)
})

router.listen(3000, () =>{
    console.log("Server is running at 3000");
})