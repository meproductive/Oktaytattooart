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