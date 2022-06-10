// const underscore = require('underscore') 
// // router.get('/test-me', function (req, res) {
// //     // myHelper.printDate()
// //     // myHelper.getCurrentMonth()
// //     // myHelper.getCohortData()
// //     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
// //     console.log('The first element received from underscope function is '+firstElement)
// //     res.send('!!! My first ever Api !!!')
// // });



//      router.get('/hii', function (req, res) {
   
//     res.send('!! Hello there !!') 
//     const respo = req.body.Name
//     console.log();

     
// console.log( "Sum of Three number is  :"+(a+b+c));;;
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender) 
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
    
// })


// router.post('/hello',function(req,res){

//     const hello = req.body  

//     console.log(hello);
// })



//     router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })





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
