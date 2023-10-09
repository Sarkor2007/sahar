console.log('Welcome!');

const langBtn = document.querySelector('.header__lang-btn');
const langMenu = document.querySelector('.header__lang-list');

langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});