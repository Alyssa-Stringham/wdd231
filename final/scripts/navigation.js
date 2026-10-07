const navButton = document.querySelector('#navigation-button');
const navBar = document.querySelector('#navigation-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});