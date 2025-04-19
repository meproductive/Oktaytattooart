
/*RESPONSIVE MENU FUNCTION*/

//BUTTON and NAVBAR
const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-btn');
const body = document.body;

//FUNCTIONS
    const openNavigation = () => {
        navigation.classList.toggle('active');
        menuButton.classList.toggle('active');
        if (navigation.classList.contains('active')) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Re-enable scrolling
        }
    };

    const closeNavigation = (event) => {
        if(!navigation.contains(event.target) && !menuButton.contains(event.target)) {
            navigation.classList.remove('active');
            menuButton.classList.remove('active');
        }
    };

    //EVENTLISTENERS
    menuButton.addEventListener('click', openNavigation);

    document.addEventListener('click', closeNavigation);


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

//pagination
document.addEventListener("DOMContentLoaded", function() {
    const photosPerPage = 8;
    const photoCards = document.querySelectorAll(".photo-card");
    const pagination = document.querySelector(".pagination");
    const totalPages = Math.ceil(photoCards.length / photosPerPage);

    function generatePagination(totalPages) {
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.classList.add('page-number');
            if (i === 1) {
                pageNumber.classList.add('active');
            }
            pageNumber.setAttribute('data-page', i);
            pageNumber.textContent = i;
            pagination.appendChild(pageNumber);
        }
    }

    function showPage(page) {
        const start = (page - 1) * photosPerPage;
        const end = start + photosPerPage;

        photoCards.forEach((card, index) => {
            card.style.display = (index >= start && index < end) ? "block" : "none";
        });

        document.querySelectorAll(".page-number").forEach(el => el.classList.remove("active"));
        pagination.querySelector(`[data-page="${page}"]`).classList.add("active");
    }

    // Initially generate pagination if there are multiple pages
    if (totalPages > 1) {
        generatePagination(totalPages);

        pagination.addEventListener("click", function(e) {
            if (e.target.classList.contains("page-number")) {
                const page = parseInt(e.target.getAttribute("data-page"));
                showPage(page);
            }
        });
    } else if (totalPages === 1) {
        generatePagination(totalPages);
    }

    // Initially show the first page
    showPage(1);
});

document.querySelectorAll('.flatpickr-input').forEach(input => {
    input.style.cursor = 'pointer';
});
