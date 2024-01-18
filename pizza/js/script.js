'use strict'

const searchBtn = document.querySelector(".search-icon"),
    wrapperBox = document.querySelector(".wrapper");


searchBtn.addEventListener("click", () => {
    wrapperBox.classList.toggle('active')
})

const carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 0;

function rotateCarousel(direction) {
    const itemWidth = document.querySelector('.item').offsetWidth;
    currentIndex = (currentIndex + direction) % 6;
    const translateValue = -currentIndex * itemWidth;
    carouselContainer.style.transform = `translateX(${translateValue}px)`;
}

function autoRotate() {
    setInterval(() => {
        rotateCarousel(1); // Move carousel to the right
    }, 3000); // Set the interval (in milliseconds) as needed
}

autoRotate();

const sliderContainer = document.querySelector('.slider-container');
let index = 0;

function rotateSlider(direction) {
    const itemWidth = document.querySelector('.slider').offsetWidth;
    index = (index + direction) % 6;
    const translateValue = -index * itemWidth;
    sliderContainer.style.transform = `translateX(${translateValue}px)`;
}

function rotate() {
    setInterval(() => {
        rotateSlider(1); // Move carousel to the right
    }, 2000); // Set the interval (in milliseconds) as needed
}

rotate();

const closeBtn = document.getElementById('close'),
    menuLayer = document.querySelector('.menu-layer'),
    coverBox = document.querySelector('.cover-box');

closeBtn.addEventListener("click", () => {
    menuLayer.style.display = 'none'
})

coverBox.addEventListener("click", ()=> {
    menuLayer.style.display = 'flex'
})

