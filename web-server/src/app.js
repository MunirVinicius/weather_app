const path = require('path')
const express = require('express')

const app  = express()
const publicPath = path.join (__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicPath))

//routes

app.get('',(req, res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Munir'
    })
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title:'About me ...',
        name:'Munir '
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Title section',
        helpMessage: 'Type help to see all possibles commands'
    })
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
