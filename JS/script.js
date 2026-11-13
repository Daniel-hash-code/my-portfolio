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
