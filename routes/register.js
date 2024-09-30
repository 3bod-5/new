const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const path = require('path');
const collection = require('../config/user');
app.use(express.static("layouts"))


// Middleware to serve static files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.render('../layouts/register')
})

app.post('/',async(req,res)=>{
    const {username, password} = req.body;
    const user = await collection.findOne({username: username})
    if(user){
        res.send('user already exists')
    }else{
        const result = await collection.insertMany({username: username, password: password})
        res.redirect('/')
    }

})  
module.exports = app