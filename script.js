document.addEventListener("DOMContentLoaded", function() {
    // --- Mobile Menu Logic ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    // --- Back to Top Button Logic ---
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Scroll Animation Logic (Your existing code) ---
    const sections = document.querySelectorAll('.story-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});