const today = new Date();
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


const myKey = "79e92f291f28f88069badebc5b341a45"
const lat = "40.05"
const long = "-111.67"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

const currentTemp = document.querySelector('#temperature');
const weatherFigElmt = document.querySelector('#weatherFig');

const forecastList = document.querySelector('#forecast');

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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    let weatherIcon = document.createElement('img')
    let captionDesc = document.createElement('figcaption')
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    weatherFigElmt.appendChild(weatherIcon)
    captionDesc.innerHTML = data.weather[0].description
    weatherFigElmt.appendChild(captionDesc)

}

const urlFore = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

async function forecastFetch() {
    try {
        const responseFore = await fetch(urlFore);
        if (responseFore.ok) {
            const dataFore = await responseFore.json();
            const dailyForecast = processForecastData(dataFore.list);

            displayForecast(dailyForecast, dataFore);
            // console.log(dataFore);
            // displayForecast(dataFore);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function processForecastData(forecastList) {
    const dailyFore = {};

    forecastList.forEach((entry) => {
        const date = entry.dt_txt.split(' ')[0];
        const hour = entry.dt_txt.split(' ')[1];


        if (!dailyFore[date]) {
            dailyFore[date] = {
                date: date,
                temp: entry.main.temp,
                weather: entry.weather[0],
            };
        } else {
            if (hour === "12:00:00") {
                dailyFore[date].weather = entry.weather[0];
                dailyFore[date].temp = entry.main.temp;
            }
        }

    });
    return Object.values(dailyFore);
}

function displayForecast(forecasts) {
    let count = 0;

    forecasts.forEach((day) => {
        const weekday = new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' });

        console.log(`
            Date: ${weekday} (${day.date})
            Description: ${day.weather.description}
            Temp: ${day.temp}
            Icon: https://openweathermap.org${day.weather.icon}@2x.png`);

        if (count < 3) {
            let fc = document.createElement('div');
            let fcDay = document.createElement('h3');
            let fcTemp = document.createElement('p');
            let fcIconFig = document.createElement('figure');
            let fcIcon = document.createElement('img');
            let fcDesc = document.createElement('p');

            const iconsrc = `https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`;

            fcDay.innerHTML = weekday;
            fcTemp.innerHTML = `${day.temp} &deg;F`;
            fcIcon.setAttribute('SRC', iconsrc);
            fcIcon.setAttribute('alt', day.weather.description);
            fcDesc.innerHTML = day.weather.description;

            fcIconFig.appendChild(fcIcon);

            fc.appendChild(fcDay);
            fc.appendChild(fcIconFig);
            fc.appendChild(fcTemp);
            fc.appendChild(fcDesc);

            forecastList.appendChild(fc);
            count += 1;
        }
    });
}
forecastFetch();
apiFetch();
/*
      currentTemp.innerHTML = `${data.main.temp}&deg;F`
captionDesc.innerHTML = data.weather[0].description
const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
weatherIcon.setAttribute('SRC', iconsrc)
weatherIcon.setAttribute('alt', data.weather[0].description)
  
  const threeDayFore = [];
  while (threeDayFore.length < 4) {
 
      let fc = document.createElement('div');
      let fcDay = document.createElement('h3');
      let fcTemp = document.createElement('p');
      let fcIconF$g = document.createElement('figure');
      let fcIcon = document.createElement('img');
      let fcDesc = document.createElement('p');
 
      fc.innerHTML = `${forecasts.weekday}`;
 
      fcIconFig.appendChild(fcIcon);
 
      fc.appendChild(fcDay);
      fc.appendChild(fcTemp);
      fc.appendChild(fcIconFig);
      fc.appendChild(fcDesc);
 
      forecasts.appendChild(fc);
  }
  // */


/*
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

        fcTemp.innerHTML =
            // need to get different for each new day
            /* if (dataFore.list[4]) {
                 fcTemp.innerHTML = `${dataFore.list[4].main.temp} &deg; F`
                 const fcIconSrc = `https://openweathermap.org/img/wn/${dataFore.list[4].weather[0].icon}.png`
                 fcIcon.setAttribute('SRC', fcIconSrc);
                 fcIcon.setAttribute('alt', dataFore.list[4].weather[0].description);
                 fcDesc.innerHTML = dataFore.list[4].weather[0].description
             } else if (dataFore.list[12]) {
                 fcTemp.innerHTML = `${dataFore.list[12].main.temp} &deg; F`
                 const fcIconSrc = `https://openweathermap.org/img/wn/${dataFore.list[12].weather[0].icon}.png`
                 fcIcon.setAttribute('SRC', fcIconSrc);
                 fcIcon.setAttribute('alt', dataFore.list[12].weather[0].description);
                 fcDesc.innerHTML = dataFore.list[12].weather[0].description
             } else if (dataFore.list[20]) {
                 fcTemp.innerHTML = `${dataFore.list[20].main.temp} &deg; F`
                 const fcIconSrc = `https://openweathermap.org/img/wn/${dataFore.list[12].weather[0].icon}.png`
                 fcIcon.setAttribute('SRC', fcIconSrc);
                 fcIcon.setAttribute('alt', dataFore.list[20].weather[0].description);
                 fcDesc.innerHTML = dataFore.list[20].weather[0].description
             } */
/*         fcIconFig.appendChild(fcIcon);
     forecast.appendChild(fcDay);
     forecast.appendChild(fcIconFig);
     forecast.appendChild(fcTemp);

     forecast.appendChild(fcDesc);

     forecasts.appendChild(forecast);
 }
}*/


