const myKey = "79e92f291f28f88069badebc5b341a45"
const lat = "40.05"
const long = "-111.67"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temperature');
const captionDesc = document.querySelector('figcaption');

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

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = data.weather[0].description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

apiFetch();

import today from './date.mjs'
// FORECAST
const numberOfDays = 6;
const options = { weekday: "long" };
//const date = document.querySelectorAll("weatherDate");

const today = new Date();
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;


//const DAYS = 6;
//const options = { weekday: "long" };

//const dayDate = new Date();
//const weatherDate = document.getElementById("day");

//let dateString = new Intl.DateTimeFormat("en-US", options).format(dayDate);
//weatherDate.innerHTML = `Today is <strong>${dateString}</strong>`;

//for (let i = 1; i <= DAYS; i++) {
//    const nextday = new Date();
//    nextday.setDate(dayDate.getDate() + i);
//    let nextdayString = new Intl.DateTimeFormat("en-US", options).format(nextday);
//    console.log(nextdayString);
//}