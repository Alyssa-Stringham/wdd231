const membershipLevels = [
    {
        level: 'Non Profit',
        benefits: ['Invitation to Monthly Membership Social', 'Membership Plaque'],
        cost: 0
    },
    {
        level: 'Bronze',
        benefits: ['Invitation to Monthly Membership Social', 'Membership Plaque'],
        cost: 12
    },
    {
        level: 'Silver',
        benefits: ['Home Page Spotlight', 'Invitation to Special Events', 'Invitation to Monthly Membership Social', 'Membership Plaque'],
        cost: 24
    },
    {
        level: 'Gold',
        benefits: ['Quarterly Training Seminar', 'Home Page Spotlight', 'Discounted Tickets to Special Events', 'Invitation to Monthly Membership Social', 'Membership Plaque'],
        cost: 36
    }
]

const showMembershipLevels = document.querySelector('#memLevels');
const membershipDialog = document.querySelector('#membership');
const dialogTitle = document.querySelector('#dialogHead');
const closeDialog = document.querySelector('#closeDialog');
const memberBenefits = document.querySelector('#memberBenefits');
const memberCost = document.querySelector('#memberCost');

closeDialog.addEventListener("click", () => membershipDialog.close());

document.getElementById('#joinForm').addEventListener('submit', function () {
    document.getElementById('#timeStamp').value = Date.now();
});

createMembershipCard(membershipLevels);

function createMembershipCard(levels) {
    console.log(levels);
    levels.forEach(level => {
        let card = document.createElement("section");
        let membership = document.createElement("h3");
        let details = document.createElement("button");

        membership.textContent = level.level;
        details.textContent = 'Show Details';

        details.addEventListener('click', () => displayLevelBenefits(level));

        card.appendChild(membership);
        card.appendChild(details);
        showMembershipLevels.appendChild(card);
    })
}

function displayLevelBenefits(level) {
    membershipDialog.showModal();
    dialogTitle.innerHTML = `${level.level} Membership Level`
    memberBenefits.innerHTML = `Benefits: `
    level.benefits.forEach(benefit => {
        let memBen = document.createElement('li');
        memBen.innerHTML = benefit;
        memberBenefits.appendChild(memBen);
    })
    memberCost.innerHTML = `Cost: $${level.cost} annually`
}