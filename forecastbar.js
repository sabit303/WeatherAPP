import { getCoordinates,getCurrentLocation } from "./getCurrentLocation.js";

export async function LoadForecast() {
    let cityname = document.getElementsByClassName("search-input")[0].value;

    const forecastData = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=aacefc0ee805401dbe9162005240810&q=${cityname}&days=6&aqi=no&alerts=no`
    );

    const response = await forecastData.json();
    for (let i=0;i<5;i++){
       document.getElementsByClassName("date")[i].innerHTML = response.forecast.forecastday[(i+1)].date;
       document.getElementsByClassName("foricon")[i].setAttribute("src",`https:${response.forecast.forecastday[(i+1)].day.condition.icon}`);
       document.getElementsByClassName("forecast-descriptioncontainer")[i].innerHTML = response.forecast.forecastday[(i+1)].day.condition.text;
       document.getElementsByClassName("forecast-tempcontainer")[i].innerHTML = Math.round(response.forecast.forecastday[(i+1)].day.maxtemp_c) + "/" 
       + Math.round(response.forecast.forecastday[(i+1)].day.mintemp_c);
       document.getElementsByClassName("precipitaion")[i].innerHTML ="Precipitation: " + response.forecast.forecastday[(i+1)].day.daily_chance_of_rain + "%";
        
    }
      


}

export async function LoadCurrentForecast() {
    await getCurrentLocation(); 
  
    let { latitude, longitude } = getCoordinates();

    const forecastData = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=aacefc0ee805401dbe9162005240810&q=${latitude},${longitude}&days=6&aqi=no&alerts=no`
    );

    const response = await forecastData.json();
    for (let i=0;i<5;i++){
       document.getElementsByClassName("date")[i].innerHTML = response.forecast.forecastday[(i+1)].date;
       document.getElementsByClassName("foricon")[i].setAttribute("src",`https:${response.forecast.forecastday[(i+1)].day.condition.icon}`);
       document.getElementsByClassName("forecast-descriptioncontainer")[i].innerHTML = response.forecast.forecastday[(i+1)].day.condition.text;
       document.getElementsByClassName("forecast-tempcontainer")[i].innerHTML = Math.round(response.forecast.forecastday[(i+1)].day.maxtemp_c) + "/" 
       + Math.round(response.forecast.forecastday[(i+1)].day.mintemp_c);
        document.getElementsByClassName("precipitaion")[i].innerHTML ="Precipitation: " + response.forecast.forecastday[(i+1)].day.daily_chance_of_rain + "%";
    }
      


}


