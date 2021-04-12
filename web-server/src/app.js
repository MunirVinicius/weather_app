const { response } = require('express')
const express = require('express')
const app  = express()

//routes

app.get('', (req, res)=>{
    res.send('Hello Express :)')
})

app.get('/help',(req,res)=>{
    res.send('Im helping')
})

app.get('/about',(req,res)=>{
    res.send(`<h1>about me</h1>
    </br>
    <p>Munir</p>
    <p>20 years old</p>
    `)
})

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
