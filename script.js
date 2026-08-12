// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(12, 12, 11, 0.9)";
    } else {
        navbar.style.background = "rgba(20, 20, 18, 0.65)";
    }

});


// =========================
// VIEW DISH BUTTONS
// =========================

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".food-card");
        const dishName = card.querySelector("h3").textContent;

        alert(
            `${dishName}\n\nMore details about this dish will be available soon.`
        );

    });

});


// =========================
// RESERVE BUTTONS
// =========================

const reserveButtons = document.querySelectorAll(
    ".nav-btn, .contact-card .primary-btn"
);

reserveButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "Thank you for choosing NOIR! 🍽️\n\n" +
            "Table reservations will be available soon."
        );

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".food-card, .review-card, .about-content, .about-image, .gallery-grid img, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log("NOIR website loaded successfully 🍷");
