
const turnOffButton = document.getElementById('turnSoundOff');
const turnOnButton = document.getElementById('turnSoundOn');
const intro = document.getElementById('introVideo');


    turnOnButton.addEventListener('click', () => {
        intro.muted = true;
        turnOnButton.style.display = 'none';
        turnOffButton.style.display = 'flex';
    });   

    turnOffButton.addEventListener('click', () => {
        intro.muted = false;
        turnOffButton.style.display = 'none';
        turnOnButton.style.display = 'flex';
    });


const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('left');
const nextButton = document.getElementById('right');

let currentIndex = 0;

function updateCarousel() {
    // Remove the active class from all items
    items.forEach(item => item.classList.remove('active'));

    // Calculate the offset to center the current middle item
    const offset =- currentIndex * (carousel.clientWidth / 3);
    carousel.style.transform = `translateX(${offset}px)`;

    // Apply the scaling and 3D effect to the current middle item
    if (items[currentIndex + 1]) {
        items[currentIndex + 1].classList.add('active');
    }
}

prevButton.addEventListener('click', () => {
    if (currentIndex > -1) { // Allow reaching the first item
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 2) { // Allow reaching the last item
        currentIndex++;
        updateCarousel();
    }
});

// Initialize the carousel on page load
updateCarousel();
