const request = require('postman-request')

const forecast = (latitude, longitude, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=97aae6d1a96cc1eb03f5929cd58c51e7&query=` + latitude +`,`+longitude
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to WeatherStack services.')
        }
        else if(body.error){
            callback(body.error.info)
        }
        else{
            const fore_cast = body.current.weather_descriptions[0];
            callback(undefined, fore_cast + ' , the temperature is: ' + body.current.temperature + '  celcius degress, and the wind speed is: ' + body.current.wind_speed)
        }
    })
}

module.exports = forecast