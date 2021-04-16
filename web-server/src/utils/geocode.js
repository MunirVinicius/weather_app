const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmxhY2toYyIsImEiOiJja244N3Yzb24wdjg5MzBwNjJ3OXVucW02In0.QPUrh0hMiauyqjj1CqBTLQ&limit=1'

    request({url, json:true},(error, {body}={})=>{
        if(error){
            return callback('Unable to connect to MapBox service')
        }
        else if (body.features.length === 0 || address === undefined){
            return callback('Unable to find location, try another search.')
        }
        else{
            return callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode