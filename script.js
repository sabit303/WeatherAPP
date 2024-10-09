import { getCoordinates,getCurrentLocation } from "./getCurrentLocation.js";
import { getgeoCoordinates,getSearchLocation } from "./getSearchLocation.js";
import { LoadForecast,LoadCurrentForecast } from "./forecastbar.js";

async function LoadCurrentWeather() {
     await getCurrentLocation(); 
  
     let { latitude, longitude } = getCoordinates();
     
    async function fetchCurrentWeather() {
        const weather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7d49d2d2a28c800aff55c4ee6665bc1e&units=metric`

        )

        const response = await weather.json();
        let currentTemp = Math.round(response.main.temp);
        document.getElementById("tempNum").innerHTML = currentTemp;
        document.getElementById("city").innerHTML = response.name;  
        document.getElementById("description").innerHTML = response.weather[0].description;
        document.getElementById("image").setAttribute("src", `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
        document.getElementById("humidity").innerHTML = "Humidity: " + response.main.humidity +"%";
        document.getElementById("feels").innerHTML = "Feels like: " + Math.round(response.main.feels_like )+"°C";
        document.getElementById("wind").innerHTML = "Wind: " + Math.round(response.wind.speed) +" km/h";
        document.getElementById("pressure").innerHTML = "Pressure: " + Math.round(response.main.pressure) +" hPa";
    }
   
    LoadCurrentForecast();
    fetchCurrentWeather();
}

window.onload = LoadCurrentWeather;

async function LoadSearchWeather() {
    await getSearchLocation(); 
 
    let { latitude, longitude } = getgeoCoordinates();
    console.log(latitude);
   async function fetchCurrentWeather() {
       const weather = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7d49d2d2a28c800aff55c4ee6665bc1e&units=metric`

       )

       const response = await weather.json();
       let currentTemp = Math.round(response.main.temp);
       document.getElementById("tempNum").innerHTML = currentTemp;
       document.getElementById("city").innerHTML = response.name;  
       document.getElementById("description").innerHTML = response.weather[0].description;
       document.getElementById("image").setAttribute("src", `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
       document.getElementById("humidity").innerHTML = "Humidity: " + response.main.humidity +"%";
       document.getElementById("feels").innerHTML = "Feels like: " + Math.round(response.main.feels_like )+"°C";
       document.getElementById("wind").innerHTML = "Wind: " + Math.round(response.wind.speed) +" km/h";
       document.getElementById("pressure").innerHTML = "Pressure: " + Math.round(response.main.pressure) +" hPa";
   }
  
  LoadForecast();
  fetchCurrentWeather();
}


document.getElementById("search-button").addEventListener("click", LoadSearchWeather);

