const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require ('../src/utils/forecast')

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
    if(!req.query.address){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    geocode (req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error){
           return res.send({error: error})
        }
        forecast (latitude, longitude, (error,{forecast,temperature}= {})=>{
            if(error){
                return res.send({error: error})
            }
            return res.send({
                forecast: forecast + ', and the temperature is: ' + temperature + ' celcius degrees' ,
                location: location,
                address: req.query.address
            })
        
        })
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
    return;
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
