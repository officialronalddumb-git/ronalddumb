export function setupIframeButtons(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.iframe_btn');
    const iframe = document.getElementById('load') as HTMLIFrameElement | null;

    if (!iframe) return;

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