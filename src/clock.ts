function updateClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement) return;

    const now = new Date();

    // Hora
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Fecha
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // meses empiezan en 0
    const year = now.getFullYear();

    // Mostrar fecha y hora
    clockElement.textContent = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year} `;
}

// Actualiza cada segundo
setInterval(updateClock, 1000);
updateClock();
