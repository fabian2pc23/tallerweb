const carrusel = document.getElementById('carrusel');
const imagenCarrusel = document.getElementById('imagen-carrusel');
const indicador = document.getElementById('indicador');

const imagenes = ['9600622.jpg', '7439390.jpg']; // Lista de imágenes
let indiceActual = 0;

// Función para mostrar la imagen actual
function mostrarImagenActual() {
    imagenCarrusel.src = imagenes[indiceActual];
    indicador.textContent = `${indiceActual + 1} / ${imagenes.length}`;
}

// Función para cambiar de imagen con animación de desvanecimiento
function cambiarImagen(delta) {
    carrusel.classList.add('fade-out'); // Agregar clase para desvanecer
    setTimeout(() => {
        indiceActual = (indiceActual + delta + imagenes.length) % imagenes.length;
        mostrarImagenActual();
        carrusel.classList.remove('fade-out'); // Eliminar clase para desvanecer
    }, 500); // Esperar 500ms (duración de la animación) antes de cambiar la imagen
}

// Evento para el botón "Anterior"
document.getElementById('anterior').addEventListener('click', () => {
    cambiarImagen(-1);
});

// Evento para el botón "Siguiente"
document.getElementById('siguiente').addEventListener('click', () => {
    cambiarImagen(1);
});

// Mostrar la imagen inicial
mostrarImagenActual();

// Función para cambiar de imagen automáticamente cada 2 segundos con animación
function cambiarAutomaticamente() {
    cambiarImagen(1);
}

// Establecer un temporizador para cambiar la imagen cada 2 segundos
const intervalo = 2000; // 2 segundos
setInterval(cambiarAutomaticamente, intervalo);
