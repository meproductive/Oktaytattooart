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
    
    function getItemsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }
    
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth;
        const containerWidth = carousel.offsetWidth;
    
        // Center the current item by offsetting it
        const offset = Math.round(-((itemWidth * currentIndex) - (containerWidth / 2) + (itemWidth / 2)));
        carousel.style.transform = `translateX(${offset}px)`;
    
        items.forEach(item => item.classList.remove('active'));
    
        if (items[currentIndex]) {
            items[currentIndex].classList.add('active');
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Recalculate on resize
    window.addEventListener('resize', updateCarousel);
    
    // Initialize
    updateCarousel();