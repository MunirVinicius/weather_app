const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmxhY2toYyIsImEiOiJja244N3Yzb24wdjg5MzBwNjJ3OXVucW02In0.QPUrh0hMiauyqjj1CqBTLQ&limit=1'

    request({url:url, json:true},(error, response)=>{
        if(error){
            callback('Unable to connect to MapBox service')
        }
        else if (response.body.features.length === 0 || address === undefined){
            callback('Unable to find location, try another search.')
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode