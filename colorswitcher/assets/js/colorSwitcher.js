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

    document.querySelectorAll("iframe").forEach((iframe) => {
        try {
            if (iframe.contentDocument) {
                iframe.contentDocument.documentElement.setAttribute("data-theme", theme);
            }
        } catch (e) {
            console.warn("Konnte Theme nicht auf iFrame setzen:", e);
        }
    });

    console.info("Set theme to " + theme)
}

async function updateLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

function updateIFrames(){
    document.querySelectorAll("iframe").forEach((iframe) => {
        iframe.addEventListener("load", function () {
            try {
                const currentTheme = document.documentElement.getAttribute("data-theme");
                this.contentDocument.documentElement.setAttribute("data-theme", currentTheme);
            } catch (e) {
                console.warn("Konnte Theme nicht auf geladenen iFrame setzen:", e);
            }
        });
    });
}


loadTheme();