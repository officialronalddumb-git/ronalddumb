"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Datos de ejemplo para noticias adicionales que se cargarán dinámicamente en la página principal
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
        title: "Dumbland Reemplaza la Energía Solar con 'Energía de Ideación' – Proponen Pensar Fuerte",
        link: "#",
        date: "Octubre 20, 2023"
    },
    {
        title: "La Educación en Dumbland Ahora Incluye una Materia Obligatoria de 'Cómo Ser Más Dumb'",
        link: "#",
        date: "Octubre 19, 2023"
    }
];
/**
 * Carga noticias adicionales en la sección "Últimas Noticias" de la página principal.
 * Busca un contenedor con el ID 'dynamic-news-list' y añade los artículos definidos en `moreNews`.
 */
function loadDynamicNews() {
    const newsListContainer = document.getElementById('dynamic-news-list');
    if (newsListContainer) {
        // En este ejemplo, las noticias estáticas ya están en el HTML.
        // Si quisieras que TODAS las últimas noticias fueran dinámicas, podrías
        // newsListContainer.innerHTML = ''; antes de este bucle.
        moreNews.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('small-news-item');
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
 * Muestra un mensaje de bienvenida en la consola del navegador.
 * Útil para depuración y para dar un toque personal al sitio.
 */
function showWelcomeMessage() {
    console.log("------------------------------------------");
    console.log("¡Bienvenido a Dumbland News! La verdad es lo que el Presidente Dumb dice que es.");
    console.log("------------------------------------------");
    console.log("Este sitio utiliza HTML, CSS y TypeScript para su magia paródica.");
    console.log("¡Gracias por visitar nuestro glorioso país!");
    console.log("------------------------------------------");
}
/**
 * Configura y gestiona la lógica del formulario de contacto.
 * Incluye validación básica de campos y muestra mensajes de éxito/error.
 */
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (!contactForm || !formMessage) {
        // Si no estamos en la página de contacto o faltan elementos, no hacemos nada.
        return;
    }
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario para manejarlo con JS/TS
        formMessage.textContent = ''; // Limpia mensajes anteriores
        formMessage.className = 'form-submission-message'; // Reinicia las clases del mensaje
        let isValid = true;
        const formData = {}; // Para almacenar los datos del formulario
        // Selecciona todos los campos de entrada (input y textarea) del formulario
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(inputElement => {
            const input = inputElement;
            const errorElement = input.parentElement?.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = ''; // Limpiar mensajes de error anteriores para este campo
            }
            input.classList.remove('invalid'); // Quitar el estilo de error visual
            // Validar campos requeridos
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                input.classList.add('invalid'); // Añadir clase para estilos de error CSS
                if (errorElement)
                    errorElement.textContent = 'Este campo es obligatorio.';
            }
            // Validar formato de email
            else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
                isValid = false;
                input.classList.add('invalid');
                if (errorElement)
                    errorElement.textContent = 'Por favor, introduce un email válido.';
            }
            // Almacenar los datos del campo si es válido
            formData[input.name] = input.value.trim();
        });
        // Mostrar el mensaje final de envío del formulario
        if (isValid) {
            formMessage.classList.add('success');
            formMessage.textContent = '¡Mensaje enviado con éxito! La administración de Dumbland lo leerá con "gran interés" (quizás).';
            console.log('Formulario de contacto enviado con los siguientes datos:', formData);
            contactForm.reset(); // Limpiar todos los campos del formulario
        }
        else {
            formMessage.classList.add('error');
            formMessage.textContent = 'Por favor, corrige los errores en el formulario antes de enviar.';
        }
    });
}
/**
 * Evento que se dispara cuando todo el DOM ha sido cargado.
 * Es el punto de entrada para la ejecución de la lógica del script.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Muestra el mensaje de bienvenida en la consola del navegador
    showWelcomeMessage();
    // Carga noticias dinámicas en la página principal si el contenedor existe
    loadDynamicNews();
    // Configura el formulario de contacto si estamos en esa página
    setupContactForm();
    // Añade un listener para el botón "Donar Ahora" en el menú
    const donateButton = document.querySelector('.btn-donate');
    if (donateButton) {
        donateButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace salte a un ancla (#donate)
            alert('¡Gracias por considerar donar a la grandeza de Dumbland! Próximamente habilitaremos la opción de pago (o no).');
            // Aquí iría la lógica real para abrir un modal de donación o redirigir a una página de Patreon/donaciones
        });
    }
    // Añade listeners para los botones "Añadir al Carrito" en la página de la tienda
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('.product-title')?.textContent;
                alert(`¡"${productName}" añadido a tu carrito imaginario de Dumbland!`);
                // Aquí iría la lógica real para añadir el producto a un carrito de compras (ej. usando LocalStorage o una API)
            }
        });
    });
});
//# sourceMappingURL=app.js.map