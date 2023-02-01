const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.style.opacity = '0';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.style.left = '1';
});