function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
}

function loadTheme() {
    var theme = localStorage.getItem("theme");
    console.info(theme)
    if (theme == null) {
        setTheme("light")
        return;
    }
    setTheme(theme)
}

function setTheme(theme) {
    updateLocalStorage(theme)
    document.documentElement.setAttribute("data-theme", theme);
    console.info("Set theme to " + theme)
}

async function updateLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

loadTheme();