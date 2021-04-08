const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=97aae6d1a96cc1eb03f5929cd58c51e7&query=37.8267,-122.4233'
const geoapi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmxhY2toYyIsImEiOiJja244N3Yzb24wdjg5MzBwNjJ3OXVucW02In0.QPUrh0hMiauyqjj1CqBTLQ&limit=1'
request({url: url, json: true}, (error, response)=>{
    const forecast = response.body.current.weather_descriptions[0];
    console.log(forecast + ' Wow, is just: ' + response.body.current.temperature + '  celcius of temperature, and the wind speed is: ' + response.body.current.wind_speed )
})

request({url: geoapi, json:true}, (error,response)=>{
    const long = response.body.features[0].center[0]
    const lat = response.body.features[0].center[1]
    console.log('the longitude is: ' + long + ' , and the latitude is: ' + lat)
})