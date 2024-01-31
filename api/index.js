const express = require("express")

const router = express();

router.get("/", function(req, res){
    res.send("hello, I am backend")
})

router.get("/about", function(req, res){
    res.send("hello from about")
})

router.listen(3000, () =>{
    console.log("Server is running at 3000");
})