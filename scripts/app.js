console.log('Welcome!');

const langBtn = document.querySelector('.header__lang-btn');
const langMenu = document.querySelector('.header__lang-list');
const footerLangBtn = document.querySelector('.footer__lang-btn');
const footerLangMenu = document.querySelector('.footer__lang-list');


langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('active');
})

footerLangBtn.addEventListener('click', () => {
    footerLangMenu.classList.toggle('active');
})

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


var swiperAbout = new Swiper(".mySwiperThree", {
    slidesPerView: 3,
    direction: "vertical",
});

const aboutHeaderBtn = document.querySelector('#aboutBtn')

aboutHeaderBtn.addEventListener('click', () => {
    swiperAbout.slideNext();
})


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
    });
}

var swiper1 = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        690: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});


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