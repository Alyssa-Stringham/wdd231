// query selector to reference html (id use #)
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');
//add event listener - reference constant - on click change class list to either add show or (if showing) remove show
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});
//check to make sure class changes on click when inspecting page