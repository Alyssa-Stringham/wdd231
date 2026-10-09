const url = 'data/facts.json';

async function getRandomFact() {
    try {
        const response = await fetch(url);
        if (response.ok) {

            const data = await response.json();
            displayRandomFact(data.factList);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getFactList() {
    try {
        const responseFact = await fetch(url);
        if (responseFact.ok) {
            const dataFact = await responseFact.json();
            displayFacts(dataFact.factList);
        } else {
            throw Error(await responseFact.text());
        }
    } catch (error) {
        console.log(error);
    }
}

displayRandomFact = (factList) => {
    const randomFact = factList[Math.floor(Math.random() * factList.length)];
    console.log(randomFact);
    const homeFact = document.querySelector('#randomFact');
    homeFact.textContent = `${randomFact}`;
}

getRandomFact();
getFactList();

const facts = document.querySelector('#factsP');

function displayFacts(factList) {
    console.log(factList);
    factList.forEach(fact => {
        console.log(fact)
        let factItem = document.createElement('li');
        factItem.textContent = fact;
        facts.appendChild(factItem);
    })
}
