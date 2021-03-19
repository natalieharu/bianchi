const hamburgerButton = document.querySelector('.hamburger-btn'),
      hamburgerMenu = document.querySelector('.menu-hamburger'),
      hamburgerMenuLinks = hamburgerMenu.querySelectorAll('a');

const toggleMenu = () => {
    hamburgerButton.classList.toggle('active');
    hamburgerMenu.classList.toggle('hidden');
};

hamburgerButton.addEventListener('click', toggleMenu);

hamburgerMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});