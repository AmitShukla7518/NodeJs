const express = require("express");
// const send = require("send");
const router = express.Router();
const userModel = require("../model/user")
const userController = require("../controllers/usercontrol")

/* router.get("/tese-me",function (req,res){

res.send("thi did c d c")

 }) */


 // Create APi for Create Users 
router.post("/CreateUser",  userController.CreateUser  )


// Create API for Fetch User Ditails 
router.get('/GetUserData', userController.GetUserData)


module.exports=router;