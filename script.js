const heroContent = document.querySelector(".hero-content");
const aboutSection = document.querySelector(".about");
const projects = document.querySelectorAll(".project");

window.addEventListener("load", () => {
    heroContent.classList.add("show");
});

window.addEventListener("scroll", () => {

    const screenPosition = window.innerHeight * 0.8;

    // About animation
    const aboutPosition = aboutSection.getBoundingClientRect().top;

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add("show");
    }

    // Project animations
    projects.forEach((project) => {

        const projectPosition = project.getBoundingClientRect().top;

        if (projectPosition < screenPosition) {
            project.classList.add("show");
        }

    });

});
