
function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");
}


/* Close mobile menu when a navigation link is clicked */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document
            .getElementById("navMenu")
            .classList.remove("show");

    });

});

