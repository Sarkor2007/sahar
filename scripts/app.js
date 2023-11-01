console.log('Welcome!');

const langBtn = document.querySelector('.header__lang-btn');
const langMenu = document.querySelector('.header__lang-list');
const footerLangBtn = document.querySelector('.footer__lang-btn');
const footerLangMenu = document.querySelector('.footer__lang-list');


langBtn?.addEventListener('click', () => {
    langMenu.classList.toggle('active');
})

footerLangBtn?.addEventListener('click', () => {
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

aboutHeaderBtn?.addEventListener('click', () => {
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

burgerOpen?.addEventListener('click', () => {
    nav.classList.add('active');
    body.classList.add('active');
    filter.classList.add('active');
})

burgerExit?.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    filter.classList.remove('active');
})

filter?.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    filter.classList.remove('active');
})

const editModalBtn = document.querySelector('.edit__modal-close')
const editModalClose = document.querySelector('.edit__bottom-btn second')
const editModal = document.querySelector('.edit-modal')
const modalFilter = document.querySelector('.modal-filter')
const editModalOpen = document.querySelector('.user__profile-bottom')

editModalOpen?.addEventListener('click', () => {
    editModal.classList.add('active')
    modalFilter.classList.add('active')
    body.classList.add('active');
    window.scrollTo(0, 0);
})

editModalBtn?.addEventListener('click', () => {
    editModal.classList.remove('active')
    modalFilter.classList.remove('active')
    body.classList.remove('active');
})

editModalClose?.addEventListener('click', () => {
    editModal.classList.remove('active')
    modalFilter.classList.remove('active')
    body.classList.remove('active');
})

const cardTabBtn = document.querySelectorAll('.create__tab-el');
const cardTabBody = document.querySelectorAll('.create__form');

for (let i = 0; i < cardTabBtn.length; i++) {
    cardTabBtn[i].addEventListener('click', () => {
        cardTabBtn.forEach(el => el.classList.remove('active'))
        cardTabBody.forEach(el => el.classList.remove('active'))
        cardTabBtn[i].classList.add('active')
        cardTabBody[i].classList.add('active')
    })
}


let psych = document.querySelector('input[name="psych"]:checked')?.value;
let teacher = document.querySelector('input[name="teacher"]:checked')?.value;

const cardPricePlus = document.querySelector('.card__price-btn.plus');
const cardPriceMinus = document.querySelector('.card__price-btn.minus');
let cardPrice = document.querySelector('.card__price-input');

cardPricePlus?.addEventListener('click', () => {
    cardPrice.value = +cardPrice.value + 10000
})

cardPriceMinus?.addEventListener('click', () => {
    if (+cardPrice.value === 10000) {
        cardPrice.value = 0
    } else if (+cardPrice.value < 10000) {
        cardPrice.value = 0
    } else {
        cardPrice.value = +cardPrice.value - 10000
    }
})

const cardCreateOpen = document.querySelector('.card__btn');
const cardCreateBtn = document.querySelector('.complete__bottom-btn.first');
const cardDraftBtn = document.querySelector('.complete__bottom-btn.second');
const cardCreate = document.querySelector('.card__create');
const cardList = document.querySelector('.card-wrapper');

cardCreateOpen?.addEventListener('click', () => {
    cardCreate.classList.add('active');
    cardList.classList.remove('active');
})

cardCreateBtn?.addEventListener('click', () => {
    cardCreate.classList.remove('active');
    cardList.classList.add('active');
})

cardDraftBtn?.addEventListener('click', () => {
    cardCreate.classList.remove('active');
    cardList.classList.add('active');
})

var options = {
    rootMargin: '0px',
    threshold: [0, .25, .50, .75, 1]
}

var callback = function (entries, observer) {
    entries.forEach(el => {
        if (el.isIntersecting && el.intersectionRatio > .75) {
            el.target.classList.add('reveal-after')
        }
        //  else {
        //     el.target.classList.remove('reveal-after');
        // }
    })
};

var observer = new IntersectionObserver(callback, options);

document.querySelectorAll('.reveal-left').forEach(el => {
    observer.observe(el);
})
document.querySelectorAll('.reveal-right').forEach(el => {
    observer.observe(el);
})
document.querySelectorAll('.reveal-top').forEach(el => {
    observer.observe(el);
})
document.querySelectorAll('.reveal-bottom').forEach(el => {
    observer.observe(el);
})

