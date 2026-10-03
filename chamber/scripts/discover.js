import { activitiesList } from "../data/activities.mjs";
console.log(activitiesList);

const cards = document.querySelector('#activityList');

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        let card = document.createElement('section');
        let activityName = document.createElement('h2');
        let activityAddress = document.createElement('address');
        let activityDescription = document.createElement('p');
        let activityFigure = document.createElement('figure');
        let activityImage = document.createElement('img');
        let learnMoreButton = document.createElement('button');

        activityName.textContent = `${activity.name}`;
        activityAddress.textContent = `${activity.location} ${activity.address}`;
        activityDescription.innerHTML = `${activity.description} \n  ${activity.cost}`;
        learnMoreButton.textContent = `Learn More`;

        activityImage.setAttribute('src', activity.picture);
        activityImage.setAttribute('alt', `Picture of ${activity.name}`);
        activityImage.setAttribute('loading', 'lazy');
        activityImage.setAttribute('height', '200');
        activityImage.setAttribute('width', 'auto');

        activityFigure.appendChild(activityImage);

        card.appendChild(activityFigure);
        card.appendChild(activityName);
        card.appendChild(activityAddress);
        card.appendChild(activityDescription);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    })
}

displayActivities(activitiesList);

const visitMessage = document.querySelector('#visit');

function userVisit() {
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        const timeSinceLastVisit = calculateTimeSinceLastVisit(lastVisit);
        if (timeSinceLastVisit < 1) {
            visitMessage.innerHTML = `Back so soon! Awesome!`
        } else if (timeSinceLastVisit === 1) {
            visitMessage.innerHTML = `You last visited ${timeSinceLastVisit} day ago.`
        }
        else {
            visitMessage.innerHTML = `You last visited ${timeSinceLastVisit} days ago.`
        }

    } else {
        console.log(`Welcome! Let us know if you have any questions.`);
    }
}

const today = new Date().toISOString();
localStorage.setItem('lastVisit', today);

function calculateTimeSinceLastVisit(previousVisit) {
    const previousVisitDate = new Date(previousVisit);
    const todayDate = new Date();
    const dateDifference = todayDate - previousVisitDate;

    return Math.floor(dateDifference / 86400000);
}

userVisit();