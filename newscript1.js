const apiKey = '0ab46fd5873c3d9c5f99a80fb5d789d8'; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall?units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon"); 
const forecast1 = document.querySelector(".forecast1"); 
const forecast2 = document.querySelector(".forecast2");

async function checkWeather(city){ 
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`); 
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){ 
        weatherIcon.src = "images/clouds.png"; 
    } else if(data.weather[0].main == "Clear"){ 
        weatherIcon.src = "images/clear.png"; 
    } else if(data.weather[0].main == "Rain"){ 
        weatherIcon.src = "images/rain.png"; 
    } else if(data.weather[0].main == "Drizzle"){ 
        weatherIcon.src = "images/drizzle.png"; 
    } else if(data.weather[0].main == "Mist"){ 
        weatherIcon.src = "images/mist.png"; 
    } 
}

async function checkForecast(city){ 
    const response = await fetch(`${apiUrlForecast}${city}&appid=${apiKey}&exclude=current,minutely,hourly,alerts`); 
    const data = await response.json();

    console.log(data); 

    let day1 = data.daily[0]; 
    let day2 = data.daily[1];

    let day1Icon = ""; 
    if(day1.weather[0].main == "Clouds"){ 
        day1Icon = "images/clouds.png"; 
    } else if(day1.weather[0].main == "Clear"){ 
        day1Icon = "images/clear.png"; 
    } else if(day1.weather[0].main == "Rain"){ 
        day1Icon = "images/rain.png"; 
    } else if(day1.weather[0].main == "Drizzle"){ 
        day1Icon = "images/drizzle.png"; 
    } else if(day1.weather[0].main == "Mist"){ 
        day1Icon = "images/mist.png"; 
    }

    let day2Icon = ""; 
    if(day2.weather[0].main == "Clouds"){ 
        day2Icon = "images/clouds.png"; 
    } else if(day2.weather[0].main == "Clear"){ 
        day2Icon = "images/clear.png"; 
    } else if(day2.weather[0].main == "Rain"){ 
        day2Icon = "images/rain.png"; 
    } else if(day2.weather[0].main == "Drizzle"){ 
        day2Icon = "images/drizzle.png"; 
    } else if(day2.weather[0].main == "Mist"){ 
        day2Icon = "images/mist.png"; 
    }

    forecast1.innerHTML = `Day 1: ${day1.temp.day}°C <img src="${day1Icon}">`; 
    forecast2.innerHTML = `Day 2: ${day2.temp.day}°C <img src="${day2Icon}">`; 
}

searchBtn.addEventListener("click", () => { 
    checkWeather(searchBox.value); 
    checkForecast(searchBox.value); 
});
