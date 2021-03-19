import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    
});