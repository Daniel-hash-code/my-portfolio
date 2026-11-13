/* =========================
   1. MOBILE NAVIGATION
========================= */

const navLinks = document.getElementById("nav-links");
const navigationLinks = navLinks.querySelectorAll("a");

// Close the Bootstrap mobile menu when a link is clicked
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const bootstrapCollapse =
            bootstrap.Collapse.getInstance(navLinks);

        if (bootstrapCollapse) {
            bootstrapCollapse.hide();
        }
    });
});


/* =========================
   2. LIGHT/DARK THEME
========================= */

const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme, if available
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

function updateThemeButton() {
    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";

    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
}

updateThemeButton();

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    updateThemeButton();
});


/* =========================
   3. AUTOMATIC COPYRIGHT YEAR
========================= */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

/* =========================
   4. SCROLL REVEAL ANIMATIONS
========================= */

// Select elements that should animate
const revealElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .section, .skill-card, .project-card"
);

// Check whether the visitor prefers reduced motion
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// Only activate animations if reduced motion is not preferred
if (!prefersReducedMotion) {

    // Add the reveal class to each selected element
    revealElements.forEach(function (element, index) {
        element.classList.add("reveal");

        // Add a slight delay between elements
        element.style.setProperty(
            "--reveal-delay",
            `${(index % 4) * 120}ms`
        );
    });

    // Observe elements as they enter the viewport
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    // Stop observing once the animation has played
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    // Start observing all selected elements
    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
}