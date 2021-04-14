const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app  = express()

// Define paths for Express config
const publicPath = path.join (__dirname, '../public')
const viewsPath = path.join (__dirname, '../templates/views')
const partialsPath = path.join (__dirname, '../templates/partials')

// Setup hbs engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//routes
app.use(express.static(publicPath))

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
        title:'Help section',
        helpMessage: 'Type help to see all possibles commands',
        name: 'Munir'
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
