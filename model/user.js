 const mongoose = require('mongoose')
// const { boolean } = require('webidl-conversions')
const userSchema = new mongoose.Schema({ 

FisrtName : String,
LastName :String,
Mobile: {
type: String,
unique:true,
required:true
},
EmailID :String,

Gender:{
    type: String,
    enum: ["Male","Female","Other"]   

},
Age:Number,
ParantsInfo:{
    MotherName: String ,
    FatherName:String,
    sibling : String
},
Car:[String]

},{timestamps:true})

//String ,Int , Array ,Object , bloolean

module.exports = mongoose.model('User',userSchema)
