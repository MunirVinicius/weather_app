const path = require('path')
const express = require('express')
const app  = express()
const publicPath = path.join (__dirname, '../public')

const helpPath = path.join (__dirname, '../public/help')

app.use(express.static(publicPath))

app.use(express.static(helpPath))

//routes


app.get('/weather',(req,res)=>{
    res.send({
        forecast:'its raining',
        location: 'Rio de Janeiro'
    })
})

//routes

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
