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
    res.send('What about me ?')
})

app.get('/weather',(req,res)=>{
    res.send('That is the forecast')
})

//routes

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
