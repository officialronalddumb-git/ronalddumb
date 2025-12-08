// src/language.ts

/**
 * Diccionario de traducciones simples para el menú
 */
const translations: Record<string, string[]> = {
    'es': ["Inicio", "Videos", "Ronald Dumb", "Tienda", "Contacto", "Donar Ahora"],
    'en': ["Home", "Videos", "Ronald Dumb", "Shop", "Contact", "Donate Now"]
};

/**
 * Configura el selector de idioma para cambiar los textos del menú al instante.
 */
export function setupLanguageSelector(): void {
    const languageSelect = document.getElementById('language-select') as HTMLSelectElement;

    // Si no existe el selector, no hacemos nada
    if (!languageSelect) return;

    languageSelect.addEventListener('change', (event: Event) => {
        const selectedLang = (event.target as HTMLSelectElement).value; // 'es' o 'en'
        
        console.log(`Idioma cambiado a: ${selectedLang}`);

        // Obtenemos los textos correspondientes del diccionario
        const newTexts = translations[selectedLang];

        if (newTexts) {
            // Seleccionamos los enlaces del menú principal (la segunda barra de navegación)
            // Nota: Usamos querySelectorAll apuntando al segundo contenedor .main-nav
            const menuLinks = document.querySelectorAll('.container:nth-of-type(2) .main-nav a');

            menuLinks.forEach((link, index) => {
                // Solo actualizamos si existe una traducción para esa posición
                if (newTexts[index]) {
                    link.textContent = newTexts[index];
                }
            });
        }
    });
}