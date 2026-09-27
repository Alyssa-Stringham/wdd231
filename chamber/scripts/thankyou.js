const getResults = window.location.search;
console.log(getResults);
const submittedInfo = new URLSearchParams(getResults);
console.log(submittedInfo);

console.log(submittedInfo.get('first'));
console.log(submittedInfo.get('last'));
console.log(submittedInfo.get('email'));
console.log(submittedInfo.get('phone'));
console.log(submittedInfo.get('orgTitle'));
console.log(submittedInfo.get('orgName'));
console.log(submittedInfo.get('busiDesc'));
console.log(submittedInfo.get('membership'));
console.log(submittedInfo.get('timeStamp'));

// display first, last, email, mobile, business name, current date timestamp
document.querySelector('#submittedForm').innerHTML = `
<p>Name: ${submittedInfo.get('first')} ${submittedInfo.get('last')}</p>
<p>Email: ${submittedInfo.get('email')}</p>
<p>Phone Number: ${submittedInfo.get('phone')}</p>
<p>Business Name: ${submittedInfo.get('orgName')}</p>
<p>Submitted at: ${submittedInfo.get('timeStamp')}</p>`