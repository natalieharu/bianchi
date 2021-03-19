import Swiper, {Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper';

import '@css/swiper.css';

Swiper.use([Pagination, EffectCoverflow, Autoplay, Navigation]);

const brandsSlider = new Swiper('.slider-brands', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 700,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
    navigation: {
        nextEl: '.brands-slider-next',
        prevEl: '.brands-slider-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024.9: {
            slidesPerView: 3,
        }
    }
});

// if(brandsSlider.slides.length <= 9) {
//     brandsSlider.destroy();
// }

const teamSlider = new Swiper('.slider-team', {
    speed: 700,
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.team-slider-next',
        prevEl: '.team-slider-prev',
    },
    on: {
        init(slider) {
            slider.slideTo(2);
        }
    }

});

const worksSlider = new Swiper('.slider-works', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 700,
    loop: true,
    navigation: {
        nextEl: '.works-slider-next',
        prevEl: '.works-slider-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024.9: {
            slidesPerView: 4,
        }
    }
});

// if(worksSlider.slides.length <= 9) {
//     worksSlider.destroy();
// }
