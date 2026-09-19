const url2 = 'data/members.json';
const displayed = document.querySelector('#members');

async function getMemberData() {
    const response = await fetch(url2);
    const data = await response.json();

    // only silver or gold members (membershipNum 2 or 3)
    const filteredCompanies = data.companies.filter(company => company.membershipNum > 1);
    // create an empty array which will display the randomly selected companies
    const randomCompanies = [];
    while (randomCompanies.length < 2) {
        // could also have "const numberDisplayed = Math.min(2, filteredCompanies.length);" outside of while loop
        // to handle cases where length of list is unknown or less than two, then do 
        // "(randomCompanies.length < numberDisplayed)" as the condition for the while loop

        // getting a random index which will be used to select a random company from the list
        // math.floor ensures only whole numbers are returned/ used
        // multiplying by length of filteredCompanies gives range of possible indexes; because length (not number), don't need to add 1
        const randomIndex = Math.floor(Math.random() * filteredCompanies.length);
        //the randomly selected company 
        const selected = filteredCompanies[randomIndex];

        // avoid duplicates by using an if statement to see if the company is already in the array "randomCompanies" and only adding if not present
        if (!randomCompanies.includes(selected)) {
            randomCompanies.push(selected);
        }
    }

    displayMembers(randomCompanies); // displays only 2 silver or gold membership level companies 
    //displayMembers(data.companies); -- displays all companies 
    //displayMembers(data.companies.filter(company => company.membershipNum > 1)); -- displays all silver or gold membership companies
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h3');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let image = document.createElement('img');
        let website = document.createElement('p');

        companyName.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        card.setAttribute('level', company.membershipNum);
        website.textContent = `${company.website}`;
        membership.textContent = `Membership: ${company.membership}`;

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '50');

        card.appendChild(image);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        displayed.appendChild(card);
    });
}

getMemberData();