const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const dataLocation = document.querySelector('#messageOne')
const dataForecast = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const location = search.value
    dataLocation.textContent = 'Loading ...'
    dataForecast.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                dataLocation.textContent = data.error
            } else{
                dataLocation.textContent =data.location
                dataForecast.textContent = data.forecast
            }
        })
    })        
})

