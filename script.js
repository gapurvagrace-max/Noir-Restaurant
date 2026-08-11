const heroContent = document.querySelector(".hero-content");
const aboutSection = document.querySelector(".about");
const projects = document.querySelectorAll(".project");


/* HERO */

window.addEventListener("load", () => {
    heroContent.classList.add("show");
});


/* SCROLL ANIMATIONS */

function revealOnScroll() {

    const screenPosition = window.innerHeight * 0.8;

    /* ABOUT */

    const aboutPosition =
        aboutSection.getBoundingClientRect().top;

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add("show");
    }


    /* PROJECTS */

    projects.forEach((project) => {

        const projectPosition =
            project.getBoundingClientRect().top;

        if (projectPosition < screenPosition) {
            project.classList.add("show");
        }

    });

}


window.addEventListener("scroll", revealOnScroll);


/* HERO PARALLAX */

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        const hero = document.querySelector(".hero");

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});
