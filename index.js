const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=97aae6d1a96cc1eb03f5929cd58c51e7&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response)=>{
    const forecast = response.body.current.weather_descriptions[0];
    console.log(forecast + ' Wow, is just: ' + response.body.current.temperature + '  celcius of temperature, and the wind speed is: ' + response.body.current.wind_speed )
})