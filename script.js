const temparature = document.getElementById('temparature') ;
const cityname = document.getElementById('cityname') ;
const description = document.getElementById('status') ;
const humidity = document.getElementById('humidity') ;
const airindex = document.getElementById('airindex') ;
const searchbox = document.getElementById('searchbox') ;
const searchbutton = document.getElementById('searchbutton') ;
const maxtemp = document.getElementById('maxtemp') ;
const mintemp = document.getElementById('mintemp') ;
const visiblity = document.getElementById('visiblity') ;
const weathericon = document.getElementById('weathericon') ;
const errorClass = document.querySelector('.error')

const apiKey = `291f507d5c9460e28632d562c2ba79af`

function weather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        searchbox.value = ''
        temparature.innerHTML = Math.floor(data.main.temp) + '°C';
        cityname.innerHTML = data.name;
        description.innerHTML = data.weather[0].description;
        humidity.innerHTML = data.main.humidity + '%'
        airindex.innerHTML = data.wind.speed + 'km/h'
        maxtemp.innerHTML = Math.floor(data.main.temp_max) + '°C'
        mintemp.innerHTML = Math.floor(data.main.temp_min) + '°C'
        visiblity.innerHTML = Math.floor(data.visibility * 0.001) + 'km'
        if(data.weather[0].description == 'haze'){
            weathericon.src = './cloudy.png'
        }else if(data.weather[0].description == 'clear sky'){
            weathericon.src = './sunny.png'
        }else if(data.weather[0].description == 'smoke'){
            weathericon.src = './mist.png'
        }else if(data.weather[0].description == 'overcast clouds'){
            weathericon.src = './overcast clouds.png'
        }else if(data.weather[0].description == 'scattered clouds'){
            weathericon.src = './scattered.png'
        }else if(data.weather[0].description == 'shower'){
            weathericon.src = './storm.png'
        }else if(data.weather[0].description == 'broken clouds'){
            weathericon.src = './storm.png'
        }
        else if(data.weather[0].description == 'light rain'){
            weathericon.src = './rainy2.png'
        }
        document.querySelector('.content').style.display = 'block'
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}
// button wroking 
searchbutton.addEventListener('click',()=>{
    weather(searchbox.value)
})