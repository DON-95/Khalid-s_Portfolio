const menuIcon = document.querySelector('#menu-btn');
const navLinks = document.querySelector('.nav-links');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

darkModeToggle.onchange = () => {
    document.body.classList.toggle('dark-mode');
    const elementsToToggle = [
        document.querySelector('.header'),
        ...document.querySelectorAll('a'),
        ...document.querySelectorAll('.grid-card'),
        ...document.querySelectorAll('.projects-card'),
        document.querySelector('footer')
    ];
    
    elementsToToggle.forEach(element => element.classList.toggle('dark-mode'));
};
