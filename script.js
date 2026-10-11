// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ==============================
// DARK / LIGHT MODE
// ==============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }
});


// ==============================
// REMEMBER THEME
// ==============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}


// ==============================
// SIMPLE SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .project-card, .about-card, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});