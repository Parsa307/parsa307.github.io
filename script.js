function redirectTo(url) {
    window.location.href = url;
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    document.getElementById("theme-icon").className = newTheme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

window.onload = function () {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);
    document.getElementById("theme-icon").className = savedTheme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
};
