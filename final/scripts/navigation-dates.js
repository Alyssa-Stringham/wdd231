const navButton = document.querySelector('#navigation-button');
const navBar = document.querySelector('#navigation-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const today = new Date();
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

