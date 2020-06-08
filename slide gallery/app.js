const track = document.querySelector('.img-list');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#arrow-right') ;
const prevButton = document.querySelector('#arrow-left') ;
const dotsNav = document.querySelector('.selector-container');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// To do: 
// - make the slider infinite (go back to the beggining)
// - if you hold down the button, the galery moves until you stop
// - full screen gallery




const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);


const moveToSlide = (track,targetSlide,currentSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const moveDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    
    moveToSlide(track, nextSlide, currentSlide)
    moveDot(currentDot,targetDot);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;

    moveToSlide(track, prevSlide, currentSlide);
    moveDot(currentDot,targetDot);
});



dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
   
    moveToSlide(track, targetSlide, currentSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    
});






