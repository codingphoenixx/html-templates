async function loadTranslations(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fehler beim Laden: ${response.status}`);
        
        const text = await response.text();
        const translations = parseProperties(text);
        applyTranslations(translations);
    } catch (error) {
        console.error("Übersetzung fehlgeschlagen:", error);
    }
}

function parseProperties(text) {
    const translations = {};
    text.split("\n").forEach(line => {
        line = line.trim();
        if (line && !line.startsWith("#")) {
            const [key, ...value] = line.split("=");
            if (key && value) {
                translations[key.trim()] = value.join("=").trim();
            }
        }
    });
    return translations;
}

function applyTranslations(translations) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

loadTranslations("./assets/translations/de-DE.properties");
