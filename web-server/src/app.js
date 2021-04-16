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
        title:'About Me ...',
        name:'Munir '
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Section',
        helpMessage: 'Type help to see all possibles commands',
        name: 'Munir'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'its raining today',
        location: 'Rio de Janeiro'
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: 'Error 404',
        errorMessage: 'Page not found, try another search term',
        name: 'Munir'
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        title: 'Error 404',
        errorMessage: 'Page not found, try another search term',
        name: 'Munir'
    })
})

//routes

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
