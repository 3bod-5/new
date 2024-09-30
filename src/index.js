const express = require('express')
const app = express()
const loginrouter = require('../routes/login')

app.use('/',loginrouter)

app.listen(3000,()=>{
    console.log('Server started on port 3000')
})




   