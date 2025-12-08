// src/search.ts
/**
 * Configura la funcionalidad de búsqueda para filtrar artículos en la página.
 * Escucha el evento 'submit' en el formulario de búsqueda y oculta/muestra artículos.
 */
export function setupSearchFunctionality() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    if (!searchForm || !searchInput)
        return;
    // Obtener TODOS los artículos a filtrar (Artículos destacados y artículos de la cuadrícula)
    const articles = document.querySelectorAll('.hero-article, .news-article');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Detiene el envío del formulario (para evitar recargar)
        // 1. Obtener y limpiar el término de búsqueda
        const searchTerm = searchInput.value.trim().toLowerCase();
        // 2. Iterar sobre todos los artículos para filtrar
        articles.forEach(article => {
            // Se usa el texto completo del artículo para la búsqueda
            const articleText = (article.textContent || '').toLowerCase();
            // 3. Lógica de filtrado
            if (articleText.includes(searchTerm)) {
                // Si el término se encuentra, se muestra.
                article.style.display = ''; // Usa el display CSS original (flex/grid)
            }
            else {
                // Si no, se oculta.
                article.style.display = 'none';
            }
        });
        // 4. Lógica de restauración: Si el campo se envía vacío, mostrar todo.
        if (searchTerm === '') {
            articles.forEach(article => {
                article.style.display = '';
            });
        }
    });
}
//# sourceMappingURL=search.js.map