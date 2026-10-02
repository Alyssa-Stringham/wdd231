import { activitiesList } from "../data/activities.mjs";
console.log(activitiesList);

const cards = document.querySelector('#activityList');

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        let card = document.createElement('section');
        let activityName = document.createElement('h3');
        let activityLocation = document.createElement('p');
        let activityAddress = document.createElement('p');
        let activityCost = document.createElement('p');
        let activityDescription = document.createElement('p');
        let activityImage = document.createElement('img');

        activityName.textContent = `${activity.name}`;
        activityLocation.textContent = `${activity.location}`;
        activityAddress.textContent = `${activity.address}`;
        activityCost.textContent = `${activity.cost}`;
        activityDescription.textContent = `${activity.description}`;

        activityImage.setAttribute('src', activity.picture);
        activityImage.setAttribute('alt', `Picture of ${activity.name}`);
        activityImage.setAttribute('loading', 'lazy');
        activityImage.setAttribute('height', '200');
        activityImage.setAttribute('width', 'auto');


        card.appendChild(activityName);
        card.appendChild(activityLocation);
        card.appendChild(activityAddress);
        card.appendChild(activityCost);
        card.appendChild(activityDescription);
        card.appendChild(activityImage);

        cards.appendChild(card);
    })
}

displayActivities(activitiesList);