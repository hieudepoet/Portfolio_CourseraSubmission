// Script to add interactivity (e.g., button clicks, smooth scrolling)
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for links (e.g., navigation links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    console.log("Portfolio loaded successfully!");
});
