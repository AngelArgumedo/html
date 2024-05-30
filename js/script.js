document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('#prev').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('#next').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        slides[currentSlide].classList.add('active');
    });
});

//carrusel
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 99999999999999999);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}

// Carrusel2
const btnLeft2 = document.querySelector(".btn-left2"),
      btnRight2 = document.querySelector(".btn-right2"),
      slider2 = document.querySelector("#slider2"),
      sliderSection2 = document.querySelectorAll(".slider-section2");

btnLeft2.addEventListener("click", e => moveToLeft2());
btnRight2.addEventListener("click", e => moveToRight2());

// let interval2 = setInterval(() => {
//     moveToRight2();
// }, 999999999);

let operacion2 = 0,
    counter2 = 0,
    widthImg2 = 100 / sliderSection2.length;

function moveToRight2() {
    if (counter2 >= sliderSection2.length - 1) {
        counter2 = 0;
        operacion2 = 0;
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "none";
        return;
    } 
    counter2++;
    operacion2 += widthImg2;
    slider2.style.transform = `translate(-${operacion2}%)`;
    slider2.style.transition = "all ease .6s";
}  

function moveToLeft2() {
    if (counter2 <= 0) {
        counter2 = sliderSection2.length - 1;
        operacion2 = widthImg2 * (sliderSection2.length - 1);
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "none";
        return;
    } 
    counter2--;
    operacion2 -= widthImg2;
    slider2.style.transform = `translate(-${operacion2}%)`;
    slider2.style.transition = "all ease .6s";
}

// Pausar el auto-desplazamiento al interactuar con los botones
btnLeft2.addEventListener('click', () => {
    clearInterval(interval2);
    interval2 = setInterval(() => {
        moveToRight2();
    }, 3000);
});

btnRight2.addEventListener('click', () => {
    clearInterval(interval2);
    interval2 = setInterval(() => {
        moveToRight2();
    }, 3000);
});
