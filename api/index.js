const dotenv = require("dotenv");
const userModel = require("./user.model.js")
const express = require("express")
const router = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const errorHandler = require("./utils/error.js")

router.use(cors())
router.use(bodyParser.json());

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

router.post("/api/auth/signup", async function(req, res, next) {
    try {
      const { username, email, password } = req.body;

      
      // Validate input (you may want to use a validation library like Joi)
      if (!username || !email || !password) {
          return res.status(400).json({ error: "All fields are mandatory" });
        }
        
        const hashedPassword = bcryptjs.hashSync(password, 10);
      // Create a new user in MongoDB
      const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json("signedUp Successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.post("/api/auth/signin", async function (req, res, next){
    try {
        const { email, password } = req.body;
  
        
        // Validate input (you may want to use a validation library like Joi)
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are mandatory" });
          }
        const validUser = await userModel.findOne({email})
        if (!validUser) {
            return res.status(400).json({ error: "User Not Found" });
        }
          const validPass = bcryptjs.compareSync(password, validUser.password);
        
          if (!validPass) {
            return res.status(400).json({ error: "Invalid Password" });
          }
    
        res.status(201).json("signedIn Successfully");
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})
  

router.listen(3000, () =>{
    console.log("Server is running at 3000");
})