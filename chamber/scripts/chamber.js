const today = new Date();
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


const myKey = "79e92f291f28f88069badebc5b341a45"
const lat = "40.05"
const long = "-111.67"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temperature');
const captionDesc = document.querySelector('figcaption');

const forecasts = document.querySelector('#forecast');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const urlFore = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

async function forecastFetch() {
    try {
        const responseFore = await fetch(urlFore);
        if (responseFore.ok) {
            const dataFore = await responseFore.json();
            console.log(dataFore);
            displayForecast(dataFore);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = data.weather[0].description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

function displayForecast(dataFore) {

    const numberOfDays = 3;
    const options = { weekday: "long" };

    for (let i = 1; i <= numberOfDays; i++) {
        const nextday = new Date();
        nextday.setDate(today.getDate() + i);
        let forecast = document.createElement('div');
        let fcDay = document.createElement('h3');
        let fcTemp = document.createElement('p');
        let fcIconFig = document.createElement('figure');
        let fcIcon = document.createElement('img');
        let fcDesc = document.createElement('p');

        let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
        fcDay.textContent = nextdaystring;
        // need to get different for each new day
        if (dataFore.list[4]) {
            fcTemp.innerHTML = `${dataFore.list[4].main.temp} &deg; F`
            const fcIconSrc = `https://openweathermap.org/img/wn/${dataFore.list[4].weather[0].icon}.png`
            fcIcon.setAttribute('SRC', fcIconSrc);
            fcIcon.setAttribute('alt', dataFore.list[4].weather[0].description);
            fcDesc.innerHTML = dataFore.list[4].weather[0].description
        }
        fcIconFig.appendChild(fcIcon);
        forecast.appendChild(fcDay);
        forecast.appendChild(fcIconFig);        
        forecast.appendChild(fcTemp);

        forecast.appendChild(fcDesc);

        forecasts.appendChild(forecast);
    }
}

apiFetch();
forecastFetch();

