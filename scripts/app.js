console.log('Welcome!');

const langBtn = document.querySelector('.header__lang-btn');
const langMenu = document.querySelector('.header__lang-list');

langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('active');
});