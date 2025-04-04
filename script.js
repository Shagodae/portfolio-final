// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

// Run function on scroll
window.addEventListener("scroll", revealSections);
revealSections(); // Initial call to show sections already in view

// Navbar hover glow effect
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
    });
    link.addEventListener("mouseout", () => {
        link.style.textShadow = "none";
    });
});
