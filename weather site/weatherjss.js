// variables
let body = document.getElementsByTagName('body')[0];
let content = document.querySelector('.main-content');
let city = document.querySelector('.city');
let timeDay = document.querySelector('.time');
let currentLocation = document.querySelector('.location');
let searchCity = document.querySelector('.search');
let weatherImg = document.querySelector('.weather-today-img>.weather-imgg');
let weatherTemp = document.querySelector('.temp>.temp1');
let weatherDescription = document.querySelector('.weather-condition>.cloudy');
let weatherConditon = document.querySelector('.weather-condition>.value');
let wind = document.querySelector('.wind>.value');
let humidity = document.querySelector('.humidity>.value');
let pressure = document.querySelector('.uvi>.value');
let forecastBlock = document.querySelector('.next-forecast');
let forecastTemp =document.querySelector('.forecast-temp>.temp1');
let forecastTemp1 =document.querySelector('.forecast-temp1>.temp1');
let forecastTemp2 =document.querySelector('.forecast-temp2>.temp1');
let forecastTemp3 =document.querySelector('.forecast-temp3>.temp1');
let forecastDay =document.querySelector('.forecast-day>.forecast-day1');
let forecastDay1 =document.querySelector('.forecast-day1>.forecast-day1');
let forecastDay2 =document.querySelector('.forecast-day2>.forecast-day1');
let forecastDay3 =document.querySelector('.forecast-day3>.forecast-day1');
let forecastHumidity =document.querySelector('.forecast-humidity>.humidity1');
let forecastHumidity1 =document.querySelector('.forecast-humidity1>.humidity1');
let forecastHumidity2 =document.querySelector('.forecast-humidity2>.humidity1');
let forecastHumidity3 =document.querySelector('.forecast-humidity3>.humidity1');
let forecastIcon =document.querySelector('.forecast-icon');
let forecastIcon1 =document.querySelector('.forecast-icon1');
let forecastIcon2 =document.querySelector('.forecast-icon2');
let forecastIcon3 =document.querySelector('.forecast-icon3');
let forecastCloudy =document.querySelector('.forecast-cloudy>.cloudy1');
let forecastCloudy1 =document.querySelector('.forecast-cloudy1>.cloudy1');
let forecastCloudy2 =document.querySelector('.forecast-cloudy2>.cloudy1');
let forecastCloudy3 =document.querySelector('.forecast-cloudy3>.cloudy1');
let suggestion = document.querySelector('#suggestions');
let cityBaseEndPoint = 'https://api.teleport.org/api/cities/?search=';
let weatherBaseEndPoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=90c4f153d4bc131123628a0752ba8418'; 
let forecastBaseEndPoint ='https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=90c4f153d4bc131123628a0752ba8418';
//let apiKey = '90c4f153d4bc131123628a0752ba8418';
 
//events  and functions


let getWeatherByCityName = async (cityString) => {
    let city;
    if(cityString.includes(',')) {
        city = cityString.substring(0, cityString.indexOf(',')) + cityString.substring(cityString.lastIndexOf(','));
    } else {
        city = cityString;
    }
    let endPoints = weatherBaseEndPoint + '&q=' + city;
    let response = await fetch(endPoints);
    if(response.status !== 200){
        alert('City not found!');
        return;
    }
    let weather = await response.json();
    return weather;
}

let getForecastByCityID = async (id) => {
    let endpoint = forecastBaseEndPoint + '&id=' + id;
    let result = await fetch(endpoint);
    let forecast = await result.json();
   // let forecastList = forecast.list;
   // let daily = [];
    console.log(forecast);

   for (let i = 0; i < forecast.list.length; i = i + 8){
    console.log(forecast.list[i]);
   }
   let dat =new Date(forecast.list[8].dt * 1000);
   let dd = dat.toLocaleDateString('en-En',{'day': '2-digit','weekday': 'short'});
    
    forecastTemp.textContent =forecast.list[8].main.temp > 0? 
                               '+' + Math.round(forecast.list[8].main.temp) : 
                                Math.round(forecast.list[8].main.temp);
    forecastDay.textContent = dd;
    forecastCloudy.textContent =forecast.list[8].clouds.all;
    forecastHumidity.textContent =forecast.list[8].main.humidity;
    function changeBg1() {
        if (forecast.list[8].weather[0].main == "Clouds"){                             
            forecastIcon.src = "./weather/cloudz.png"; 
        } else if(forecast.list[8].weather[0].main == "Clear"){
            forecastIcon.src = "./weather/sunz.png";
        } else if(forecast.list[8].weather[0].main == "Rain" ||forecast.list[8].weather[0].main == "Drizzle"){
            forecastIcon.src = "./weather/rainz.png";
        } else if(forecast.list[8].weather[0].main == "Storm" || forecast.list[8].weather[0].main == "Thunderstorm"){
            forecastIcon.src = "./weather/storm (1).png";
        } else if(forecast.list[8].weather[0].main == "Snow"){
            forecastIcon.src = "./weather/snow.png";
        } else {
            forecastIcon.src = "./weather/haze.png";
        }

        if (forecast.list[16].weather[0].main == "Clouds"){                             
            forecastIcon1.src = "./weather/cloudz.png"; 
        } else if(forecast.list[16].weather[0].main == "Clear"){
            forecastIcon1.src = "./weather/sunz.png";
        } else if(forecast.list[16].weather[0].main == "Rain" ||forecast.list[8].weather[0].main == "Drizzle"){
            forecastIcon1.src = "./weather/rainz.png";
        } else if(forecast.list[16].weather[0].main == "Storm" || forecast.list[8].weather[0].main == "Thunderstorm"){
            forecastIcon1.src = "./weather/storm (1).png";
        } else if(forecast.list[16].weather[0].main == "Snow"){
            forecastIcon1.src = "./weather/snow.png";
        } else {
            forecastIcon1.src = "./weather/haze.png";
        }

        if (forecast.list[24].weather[0].main == "Clouds"){                             
            forecastIcon2.src = "./weather/cloudz.png"; 
        } else if(forecast.list[24].weather[0].main == "Clear"){
            forecastIcon2.src = "./weather/sunz.png";
        } else if(forecast.list[24].weather[0].main == "Rain" ||forecast.list[8].weather[0].main == "Drizzle"){
            forecastIcon2.src = "./weather/rainz.png";
        } else if(forecast.list[24].weather[0].main == "Storm" || forecast.list[8].weather[0].main == "Thunderstorm"){
            forecastIcon2.src = "./weather/storm (1).png";
        } else if(forecast.list[24].weather[0].main == "Snow"){
            forecastIcon2.src = "./weather/snow.png";
        } else {
            forecastIcon2.src = "./weather/haze.png";
        }

        if (forecast.list[32].weather[0].main == "Clouds"){                             
            forecastIcon3.src = "./weather/cloudz.png"; 
        } else if(forecast.list[32].weather[0].main == "Clear"){
            forecastIcon3.src = "./weather/sunz.png";
        } else if(forecast.list[32].weather[0].main == "Rain" ||forecast.list[8].weather[0].main == "Drizzle"){
            forecastIcon3.src = "./weather/rainz.png";
        } else if(forecast.list[32].weather[0].main == "Storm" || forecast.list[8].weather[0].main == "Thunderstorm"){
            forecastIcon3.src = "./weather/storm (1).png";
        } else if(forecast.list[32].weather[0].main == "Snow"){
            forecastIcon3.src = "./weather/snow.png";
        } else {
            forecastIcon3.src = "./weather/haze.png";
        }
    }
    window.onload = changeBg1();

    let dat1 =new Date(forecast.list[16].dt * 1000);
    let dd1 = dat1.toLocaleDateString('en-En',{'day': '2-digit','weekday': 'short'});
 

    forecastTemp1.textContent =forecast.list[16].main.temp > 0? 
                                '+' + Math.round(forecast.list[16].main.temp) : 
                                Math.round(forecast.list[16].main.temp);
    forecastDay1.textContent = dd1;
    forecastCloudy1.textContent =forecast.list[16].clouds.all;
    forecastHumidity1.textContent =forecast.list[16].main.humidity;
    

    let dat2 =new Date(forecast.list[24].dt * 1000);
    let dd2 = dat2.toLocaleDateString('en-En',{'day': '2-digit','weekday': 'short'});
 

    forecastTemp2.textContent =forecast.list[24].main.temp > 0? 
                                '+' + Math.round(forecast.list[24].main.temp) : 
                                 Math.round(forecast.list[24].main.temp);
    forecastDay2.textContent = dd2;
    forecastCloudy2.textContent =forecast.list[24].clouds.all;
    forecastHumidity2.textContent =forecast.list[24].main.humidity;
 
    let dat3 =new Date(forecast.list[32].dt * 1000);
    let dd3 = dat3.toLocaleDateString('en-En',{'day': '2-digit','weekday': 'short'});
 

    forecastTemp3.textContent =forecast.list[32].main.temp > 0? 
                                '+' + Math.round(forecast.list[32].main.temp) : 
                                 Math.round(forecast.list[32].main.temp);
    forecastDay3.textContent = dd3;
    forecastCloudy3.textContent =forecast.list[32].clouds.all;
    forecastHumidity3.textContent =forecast.list[32].main.humidity;
   
}


let weatherForCity = async (city) => {
    let weather = await getWeatherByCityName(city);
        if(!weather){
            return;
        }
        let cityID = weather.id;
        updateCurrentWeather(weather);
        let forecast = await getForecastByCityID(cityID);
        updateForecast(forecast);
    
}

let init = () => {
    weatherForCity('Abuja');
}
init();

searchCity.addEventListener('keydown', async (e) => {
    if(e.keyCode === 13){

        weatherForCity(searchCity.value);   
        
        //return newFunction(bgChange());  
    } 
    
})


searchCity.addEventListener('input', async () => {
    let endpoint = cityBaseEndPoint + searchCity.value
    let result = await (await fetch(endpoint)).json();
    suggestion.innerHTML = '';
    let cities = result._embedded['city:search-results'];
    let length = cities.length > 5 ? 5 : cities.length;
    for(let i = 0; i < length; i++){
        let option = document.createElement('option');
        option.value = cities[i].matching_full_name;
        suggestion.appendChild(option);
    }
})

let updateCurrentWeather = (data) => {
    console.log(data);
    city.textContent = data.name + ', ' + data.sys.country;
    timeDay.textContent = dayOfWeek();
    humidity.textContent = data.main.humidity;
    currentLocation.textContent = data.name + ', ' + data.sys.country;
    pressure.textContent = data.main.pressure;
    weatherDescription.textContent = data.weather[0].main; 
    weatherConditon.textContent = data.clouds.all;
    //let we ='https://api.openweathermap.org/img/wn/'
    //let sz = '@2xx.png'
    //weatherImg.src = we + data.weather[0].id + sz;
    let windDirection;
    let deg =data.wind.deg;
    if(deg > 45 && deg <= 135){
        windDirection = 'E';
    } else if( deg > 135 && deg <= 225) {
        windDirection = 'S';
    } else if( deg > 225 && deg <= 315) {
        windDirection = 'W';
    } else{
        windDirection = 'N';
    }
    wind.textContent = windDirection + ', ' + data.wind.speed;
    weatherTemp.textContent = data.main.temp > 0? 
                                '+' + Math.round(data.main.temp) : 
                                 Math.round(data.main.temp);
    function changeBg() {
        if (weatherDescription.textContent == "Clouds"){                             
            weatherImg.src = "./weather/cloudz.png"; 
        } else if (weatherDescription.textContent == "Clear") {
            weatherImg.src = "./weather/sunz.png";
        } else if (weatherDescription.textContent == "Rain" || weatherDescription.textContent == "Drizzle") {
            weatherImg.src ="./weather/rainz.png" ;
        } else if (weatherDescription.textContent == "Storm" || weatherDescription.textContent == "Thunderstorm") {
            weatherImg.src = './weather/storm (1).png';
        } else if (weatherDescription.textContent == "Snow") {
            weatherImg.src = "./weather/snowz.png";
        } else{
            weatherImg.src = "./weather/haze.png";
        }
         
    }
    return changeBg();
}


let updateForecast = (getForecastByCityID) =>{
    console.log(getForecastByCityID);
}

let dayOfWeek = () => {
    return new Date().toLocaleDateString('en-En', {'year': 'numeric','day':'2-digit','month': 'short', 'weekday': 'short'});
}

function newFunction() {
    return bgChange();
}
//functions
