const url = 'data/members.json';
const displayed = document.querySelector('#members');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies)
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let image = document.createElement('img');
        let website = document.createElement('p');

        companyName.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        card.setAttribute('level', company.membershipNum);
        website.textContent = `${company.website}`;


        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '50');

        card.appendChild(image);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);


        displayed.appendChild(card);

    });
}

getMemberData();