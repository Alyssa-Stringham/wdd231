//gets information from submitted form 
const getString = window.location.search;
// log information to console
console.log(getString);
// new constant; use built-in JavaScript URL search params constructor and assign it to second part of URL
const myInfo = new URLSearchParams(getString);
// log to console
console.log(myInfo);
// when open triange, can see different methods available to use (includes 'get')

// use get method to display form results to console
// first name
//console.log(myInfo.get('first'));
//console.log(myInfo.get('last'));
//console.log(myInfo.get('ordinance'));
//console.log(myInfo.get('date'));
//console.log(myInfo.get('location'));
//console.log(myInfo.get('phone'));
//console.log(myInfo.get('email'));


// can also do
//          const myInfo = new URLSearchParams(window.location.search);

//display submitted info to user on thanks.html page
// set querySelector equal to template literal string
document.querySelector('#results').innerHTML = `
<p>Appointment for: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple.</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email: ${myInfo.get('email')}</p>`

// good idea to test multiple times/ with multiple users