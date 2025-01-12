document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActiveLink = () => {
        let currentSection = "";

        // Determine which section is in view
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 70; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update nav link styles
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        });
    };

    // Add scroll event listener
    window.addEventListener("scroll", setActiveLink);

    // Initial call to set the active link when the page loads
    setActiveLink();
});
