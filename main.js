const toggleBtn = document.getElementById("toggle-btn");
const container = document.querySelector(".container");


function updateIcon(theme) {
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

const currentTheme = localStorage.getItem("theme") || "light";
container.classList.add(currentTheme);
updateIcon(currentTheme);


toggleBtn.addEventListener("click", () => {
    const newTheme = container.classList.contains("light") ? "dark" : "light";
    container.classList.remove("light", "dark");
    container.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
});

