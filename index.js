const express = require('express');

var bodyParser = require('body-parser');
const route = require('./route/route');
const   mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Amit7518:Amit%407518@cluster0.rwmfg9t.mongodb.net/User?retryWrites=true&w=majority",{useNewUrlParser: true })
.then( ()=>console.log( "MongoDb is connected ..."))
.catch(err => console.log(err))


app.use('/', route);
app.listen(process.env.PORT || 3000, function() {
console.log('Express app running on port ' + (process.env.PORT || 3000))
       
});

