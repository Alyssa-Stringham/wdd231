const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentTemp = document.querySelector('#temperature');

const myKey = "79e92f291f28f88069badebc5b341a45"
const myLat = "49.75"
const myLong = "6.64"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
	try {
		const response = await fetch(myURL);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(data) {
	console.log('hello')
	currentTemp.innerHTML = `${data.main.temp}&deg;F`
	captionDesc.innerHTML = data.weather[0].description
	const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	weatherIcon.setAttribute('SRC', iconsrc)
	weatherIcon.setAttribute('alt', data.weather[0].description)
}

apiFetch();


// from video
// const town = document.querySelector('#town');
// const description = document.querySelector('#description');
// const temperature = document.querySelector('#temperature');
// const graphic = document.querySelector('#graphic');

// variables for API key
// cost myKey = "[personal key]"
// const myLat = "42.91"
// const myLong = "-76.8"

// const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
// use backticks for template literals, then add "$" and change variable names as needed
// remove "https, but leave '//' "

// async funciton apiFetch() {
//try{
//      const response = await fetch(myURL);
//      if (response.ok){
//          const data=await response.json();
//          console.log(data); [for testing only]
//          displayResults(data); [after coding additional funciton]
//      }else {
//          throw Error(await response.text());
//      }
//  }catch (error){
//      console.log(error);
//  }
// }

//VIDEO PART 3
// new fuction
// function displayResults(data){
//  console.log('hello') [to test function, make sure to call function]
// }

//to access information from console (on web inspect) -- variable.innerHTML = data.key
// weather description key = weather[0].description
// continued in code