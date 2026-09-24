// Lógica de interacción para la web de hoteles

function buscarHotel() {
    const query = document.getElementById('searchInput').value;
    alert("Buscando disponibilidad para: " + (query ? query : "Todos los destinos"));
}

function reservar(hotel, precio) {
    alert("¡Has seleccionado " + hotel + "! El precio por noche es $" + precio + ".\nRedirigiendo a pasarela de pago segura...");
}
