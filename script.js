// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(".reveal-up, .fade-in, .fade-up");
    animateElements.forEach(el => observer.observe(el));
    
    // Add initial visibility for elements in viewport right on load
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-up').forEach(el => {
            el.classList.add("is-visible");
        });
    }, 100);
});