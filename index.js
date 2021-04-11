const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode ('New York', (error, data)=>{
    console.log(data.location)
    forecast (data.latitude, data.longitude, (error,data)=>{
        console.log('Error', error)
        console.log(data)
    })
})