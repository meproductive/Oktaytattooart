//pagination
document.addEventListener("DOMContentLoaded", function () {
    const photosPerPage = 8;
    const photoCards = document.querySelectorAll("#photo-card");
    const pagination = document.querySelector("#pagination");

    // Convert NodeList to Array for easier handling
    const photoArray = Array.from(photoCards);
    const totalPages = Math.ceil(photoArray.length / photosPerPage);

    function generatePagination(totalPages) {
        pagination.innerHTML = "";

        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const pageNumber = document.createElement("span");
                pageNumber.classList.add("page-number");
                pageNumber.textContent = i;
                pageNumber.dataset.page = i;

                if (i === 1) {
                    pageNumber.classList.add("active");
                }

                pagination.appendChild(pageNumber);
            }
        }
    }

    function showPage(page) {
        const start = (page - 1) * photosPerPage;
        const end = start + photosPerPage;

        photoArray.forEach((card, index) => {
            card.style.display = index >= start && index < end ? "flex" : "none";
        });

        document.querySelectorAll(".page-number").forEach(el => {
            el.classList.remove("active");
        });

        const currentPageBtn = document.querySelector(`.page-number[data-page="${page}"]`);
        if (currentPageBtn) {
            currentPageBtn.classList.add("active");
        }
    }

    // Only generate pagination and setup events if more than 8 photos
    if (photoArray.length > photosPerPage) {
        generatePagination(totalPages);

        pagination.addEventListener("click", function (e) {
            if (e.target.classList.contains("page-number")) {
                const selectedPage = parseInt(e.target.dataset.page);
                showPage(selectedPage);
            }
        });
    }

    // Always show page 1 on load
    showPage(1);
});
