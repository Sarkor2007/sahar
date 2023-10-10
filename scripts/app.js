console.log('Welcome!');

const langBtn = document.querySelectorAll('.header__lang-btn');
const langMenu = document.querySelectorAll('.header__lang-list');


for (let i = 0; i < langBtn.length; i++) {
    langBtn[i].addEventListener('click', () => {
        langMenu[i].classList.toggle('active');
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 2,
    spaceBetween: 30,
});


const accordionBtn = document.querySelectorAll('.questions__item-btn');
const accordionBody = document.querySelectorAll('.questions__item-content');
const accordionArrow = document.querySelectorAll('.questions__item-btn img');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i]?.addEventListener('click', () => {
        accordionBody[i].classList.toggle('active');
        accordionArrow[i].classList.toggle('active');
        if (accordionBody[i].classList.contains('active')) {
            accordionBody[i].style.minHeight = accordionBody[i].scrollHeight + 'px';
        } else {
            accordionBody[i].style.minHeight = '0';
        }
    })
}

const burgerOpen = document.querySelector('.nav__open');
const burgerExit = document.querySelector('.nav__exit-btn');
const nav = document.querySelector('.nav');
const body = document.querySelector('body')
const filter = document.querySelector('.filter')

burgerOpen.addEventListener('click', () => {
    nav.classList.add('active');
    body.classList.add('active');
    filter.classList.add('active');
})

burgerExit.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    filter.classList.remove('active');
})

filter.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    filter.classList.remove('active');
})