const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

const slider = document.querySelector('.gallery .content');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
});