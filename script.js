const heroContent = document.querySelector(".hero-content");
const aboutSection = document.querySelector(".about");

window.addEventListener("load", () => {
    heroContent.classList.add("show");
});

window.addEventListener("scroll", () => {

    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.8;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add("show");
    }

});
