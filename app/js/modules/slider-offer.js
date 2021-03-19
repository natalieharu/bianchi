function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          height = window.getComputedStyle(sliderWrapper).height;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent =`0${slides.length}`;
        current.textContent =`0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.height = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.height = height;
    });

    sliderWrapper.style.overflow = 'hidden';

    function deleteNotDigits(str){
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if(offset == deleteNotDigits(height) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += deleteNotDigits(height);
        }

        slidesField.style.transform = `translateY(-${offset}px)`;

        if(slideIndex == slides.length){
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        
    });

    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = deleteNotDigits(height) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(height);
        }

        slidesField.style.transform = `translateY(-${offset}px)`;

        if(slideIndex == 1){
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

       
    });


}



// function slider ({slide, nextArrow, prevArrow, totalCounter, currentCounter}) {
        
//         const slides = document.querySelectorAll(slide),
//         prev = document.querySelector(prevArrow),
//         next = document.querySelector(nextArrow),
//         total = document.querySelector(totalCounter),
//         current = document.querySelector(currentCounter);

//     let slideIndex = 1;
//     showSlides(slideIndex);

//     if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//     } else {
//         total.textContent = slides.length;
//     }

//     function showSlides(n) {
//         if (n > slides.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }

//         slides.forEach(slide => slide.style.display = 'none');
//         slides[slideIndex - 1].style.display = 'block';

//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     }

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     prev.addEventListener('click', () => {
//         plusSlides(-1);
//     });
//     next.addEventListener('click', () => {
//         plusSlides(1);
//     });
// }

export default slider;
