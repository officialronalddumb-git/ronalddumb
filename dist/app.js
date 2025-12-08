// src/app.ts
// 1. IMPORTACIONES
// Importamos las funciones lógicas desde los otros archivos
import { setupSearchFunctionality } from './search';
import { setupLanguageSelector } from './language';
// Datos de ejemplo para noticias adicionales que se cargarán dinámicamente
const moreNews = [
    {
        title: "Nuevo Ministerio de la Felicidad Pura en Dumbland Declara la Tristeza 'Ilegal'",
        link: "#",
        date: "Octubre 22, 2023"
    },
    {
        title: "Ronald Dumb Anuncia que los Espejos Mienten y que 'Él es el Más Guapo, Siempre'",
        link: "#",
        date: "Octubre 21, 2023"
    },
    {
        title: "Dumbland Reemplaza la Energía Solar con 'Energía de Ideación'",
        link: "#",
        date: "Octubre 20, 2023"
    },
    {
        title: "La Educación en Dumbland Ahora Incluye una Materia Obligatoria de 'Cómo Ser Más Dumb'",
        link: "#",
        date: "Octubre 19, 2023"
    }
];
// 3. FUNCIONES AUXILIARES
/**
 * Carga noticias adicionales en la página.
 * IMPORTANTE: Añade la clase 'small-news-item' para que el buscador las detecte.
 */
function loadDynamicNews() {
    const newsListContainer = document.getElementById('dynamic-news-list');
    if (newsListContainer) {
        moreNews.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('small-news-item'); // Clase necesaria para el buscador
            articleElement.innerHTML = `
                <h3><a href="${article.link}">${article.title}</a></h3>
                <div class="article-meta">
                    <span>${article.date}</span>
                </div>
            `;
            newsListContainer.appendChild(articleElement);
        });
    }
}
/**
 * Muestra mensaje de bienvenida en consola.
 */
function showWelcomeMessage() {
    console.log("------------------------------------------");
    console.log("¡Bienvenido a Dumbland News!");
    console.log("------------------------------------------");
}
/**
 * Configura la lógica del formulario de contacto.
 */
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (!contactForm || !formMessage)
        return;
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulación de envío exitoso
        formMessage.textContent = '¡Mensaje enviado con éxito! (Simulado)';
        formMessage.className = 'form-submission-message success';
        console.log('Formulario enviado.');
        contactForm.reset();
    });
}
/**
 * Configura el botón de LUPA para mostrar/ocultar la barra de búsqueda.
 */
function setupSearchToggle() {
    const searchIcon = document.getElementById('search-icon');
    const searchWrapper = document.getElementById('search-bar-wrapper');
    if (!searchIcon || !searchWrapper)
        return;
    searchIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // Alterna la clase 'hidden' para mostrar u ocultar la barra
        searchWrapper.classList.toggle('hidden');
        // Si se muestra, poner el foco en el input
        if (!searchWrapper.classList.contains('hidden')) {
            const searchInput = document.getElementById('search-input');
            searchInput?.focus();
        }
    });
}
// 4. PUNTO DE ENTRADA PRINCIPAL (DOM LOADED)
document.addEventListener('DOMContentLoaded', () => {
    // A. Mostrar mensaje de bienvenida
    showWelcomeMessage();
    // B. Configurar elementos estáticos del Header
    setupSearchToggle(); // Activa el botón de la lupa
    setupLanguageSelector(); // Activa el cambio de idioma (desde language.ts)
    // C. Cargar contenido dinámico (IMPORTANTE HACERLO ANTES DE LA BÚSQUEDA)
    loadDynamicNews();
    // D. Configurar la Búsqueda (desde search.ts)
    // Se ejecuta aquí para que pueda capturar tanto los artículos estáticos como los dinámicos recién creados.
    setupSearchFunctionality();
    // E. Configurar otras secciones
    setupContactForm();
    // Listener para botón Donar
    const donateButton = document.querySelector('.btn-donate');
    if (donateButton) {
        donateButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('¡Gracias por donar a Dumbland!');
        });
    }
    // Listeners para Tienda
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('.product-title')?.textContent;
                alert(`¡"${productName}" añadido al carrito!`);
            }
        });
    });
});
//# sourceMappingURL=app.js.map