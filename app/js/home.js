import slider from './modules/slider-offer';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {

    slider({
        container: '.offer-slider',
        slide: '.offer-slide',
        nextArrow: '.offer-slider-next',
        prevArrow: '.offer-slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer-slider-wrapper',
        field: '.offer-slider-inner',
    });

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    


});
