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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".mySwiperOne", {
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        401: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});



var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
        450: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        870: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
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