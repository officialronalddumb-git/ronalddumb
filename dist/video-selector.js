export function setupIframeButtons() {
    const buttons = document.querySelectorAll('.iframe_btn');
    const iframe = document.getElementById('load');
    if (!iframe)
        return;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase active de todos
            buttons.forEach(btn => btn.classList.remove('active'));
            // Activar el botón clickeado
            button.classList.add('active');
            // Obtener y limpiar la URL
            const newSrc = (button.getAttribute('data-src') || '').trim();
            if (newSrc) {
                iframe.src = newSrc;
            }
        });
    });
}
//# sourceMappingURL=video-selector.js.map