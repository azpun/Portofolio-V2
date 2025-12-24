import './style.css'

const btnMenu = document.getElementById('btnMenu');
const navMenu = document.getElementById('navbarBurger')

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('showMenu');
    navMenu.classList.toggle('hideMenu');
});

// function setDataTheme() {
//     const currentTheme = rootElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light'; // ini adalah shorthand pengkondisian (serupa dengan if..else..)
//     rootElement.setAttribute('data-theme', newTheme);
// }

// function changeIconTheme() {
//     const currentTheme = rootElement.getAttribute('data-theme');
//     if (currentTheme === 'light') {
//         iconTheme.setAttribute('src', '/ui/white/sun-black.png');
//         iconMenu.setAttribute('src', '/ui/white/menu-black.png');
//         iconPhone.setAttribute('src', '/ui/black/phone-black.png');
//         iconEmail.setAttribute('src', '/ui/black/email-black.png');
//         iconLocation.setAttribute('src', '/ui/black/location-black.png');
//         iconGithub.forEach(icon => {
//             icon.setAttribute('src', '/ui/black/github-black.png');
//         });
//         iconLinkedin.forEach(icon => {
//             icon.setAttribute('src', '/ui/black/linkedin-black.png');
//         });
//     } else {
//         iconTheme.setAttribute('src', '/ui/white/moon-white.png');
//         iconMenu.setAttribute('src', '/ui/white/menu-white.png');
//         iconPhone.setAttribute('src', '/ui/black/phone-white.png');
//         iconEmail.setAttribute('src', '/ui/black/email-white.png');
//         iconLocation.setAttribute('src', '/ui/black/location-white.png');
//         iconGithub.forEach(icon => {
//             icon.setAttribute('src', '/ui/black/github-white.png');
//         });
//         iconLinkedin.forEach(icon => {
//             icon.setAttribute('src', '/ui/black/linkedin-white.png');
//         })
//     }
// }

// btnTheme.addEventListener('click', setDataTheme);
// btnTheme.addEventListener('click', changeIconTheme);