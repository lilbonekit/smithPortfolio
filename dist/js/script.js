const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.style.opacity = '0';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.style.opacity = '1';
});

menu.addEventListener('click', (event) => {
    if(event.target !== event.currentTarget) return;
    menu.classList.remove('menu_active');
    hamburger.style.opacity = '1';
})

const counters = document.querySelectorAll('.progress__per'),
      progressBar = document.querySelectorAll('.progress__progress');

counters.forEach( (item, i) => {
    progressBar[i].style.width = item.innerHTML;
});