const getResults = window.location.search;
console.log(getResults);
const submittedInfo = new URLSearchParams(getResults);
console.log(submittedInfo);

console.log(submittedInfo.get('first'));
console.log(submittedInfo.get('last'));
console.log(submittedInfo.get('email'));
console.log(submittedInfo.get('question'));
console.log(submittedInfo.get('questionText'));

document.querySelector('#submittedForm').innerHTML = `
<p>Name: ${submittedInfo.get('first')} ${submittedInfo.get('last')}</p>
<p>Email:  ${submittedInfo.get('email')}</p>
<p>Your question about ${submittedInfo.get('question')}: ${submittedInfo.get('questionText')}
`