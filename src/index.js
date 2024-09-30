const express = require('express')
const app = express()
const loginrouter = require('../routes/login')
const registerrouter = require('../routes/register')
app.set('view engine', 'ejs');
app.use(express.static("layouts"))
app.use('/',loginrouter)
app.use('/api/register',registerrouter)
app.listen(3000,()=>{
    console.log('Server started on port 3000')
})




   