//! Getting Elements from HTML
let settingsMenu = document.querySelector('.settings-menu');
let darkBtn = document.querySelector('#dark-btn');



//! Settings Menu Toggle Function
function settingsMenuToggle() {
    settingsMenu.classList.toggle('settings-menu-height');
}

//! Dark/Light Mode Toggle Function
darkBtn.onclick = function() {
    darkBtn.classList.toggle('dark-btn-on');
}

