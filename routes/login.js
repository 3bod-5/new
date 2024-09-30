const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const collection = require('../config/user');
app.use(express.static("layouts"))

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.render('../layouts/login')
})

app.post('/',async(req,res)=>{
    const {username, password} = req.body;
    const find = await collection.find({username: username})
    if(find){
        if(find.password === password){
            res.send('Login Successful')
        }else{
            res.send('Incorrect Password')
        }
    }else{
        res.send('User not found')
    }

})  
module.exports = app