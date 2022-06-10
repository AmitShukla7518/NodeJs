
const express = require("express");
const router = express.Router();
const userModel = require("../model/user")

const CreateUser = async function(req,res){
    let Data = req.body 
       
        let SaveData=  await userModel.create(Data)
       console.log(Data);
        res.send({msg:SaveData})
}

const GetUserData = async function(req,res){

    let AllUser = await userModel.find()
    console.log(AllUser);
    res.send({msg: AllUser})
 
 }



module.exports.CreateUser=CreateUser;
module.exports.GetUserData = GetUserData;