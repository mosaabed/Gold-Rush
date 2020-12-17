const express = require('express')
const path = require('path')



// connecting to DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/GoldRushDB' , { useNewUrlParser: true })

// html connect
const app = express() 
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/MosaTheHost' , express.static(path.join(__dirname, 'host')))


/// for the post use ($.post)
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const api = require('./server/routes/api')
app.use('/', api)


// port init
const port = 2011 
app.listen(port , function(){
    console.log(`Server running on ${port}`)
})
