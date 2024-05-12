// Verificar si el dispositivo es móvil
var esDispositivoMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Arreglo de imágenes
var imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
var index = 0; // Índice actual de la imagen

// Función para cambiar la imagen
function cambiarImagen() {
    // Obtener el elemento de la imagen
    var imagen = document.getElementById("imagen1");
    // Cambiar la opacidad de la imagen a 0
    imagen.style.opacity = 0;
    // Cambiar la fuente de la imagen después de 0.5 segundos (cuando su opacidad no es 0)
    setTimeout(function() {
        imagen.src = imagenes[index];
    }, 500);
    // Incrementar el índice para la siguiente imagen
    index = (index + 1) % imagenes.length;
    // Cambiar la opacidad de la imagen a 1 después de 0.5 segundos
    setTimeout(function() {
        imagen.style.opacity = 1;
    }, 500); 
}

// Llamar a la función cambiarImagen cada 4 segundos
setInterval(cambiarImagen, 4000);


var sobre = document.getElementById("sobre");
var carta = document.getElementById("carta");
var tocado = true; // Variable para controlar si el sobre ha sido tocado

// Agregar evento de clic o táctil al sobre
if (esDispositivoMovil) {
    // Agregar evento táctil al sobre para dispositivos móviles
    sobre.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del evento táctil
        
        // Si el sobre ha sido tocado, abrir o cerrar la carta según su estado actual
        if (tocado) {
            if (carta.classList.contains("active")) {
                cerrarCarta();
                tocado = false;
            } else {
                abrirCarta();
            }
        } else {
            // Si el sobre no ha sido tocado, voltearlo
            voltearSobre();
            tocado = true;
        }
    });
} else {
    // Agregar evento de clic al sobre para dispositivos no móviles (como computadoras)
    sobre.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del clic
        
        // Si el sobre no ha sido tocado, voltearlo
        if (tocado) {
            voltearSobre();
            tocado = false;
        } else {
            // Si el sobre ya ha sido tocado, abrir o cerrar la carta según su estado actual
            if (carta.classList.contains("active")) {
                cerrarCarta();
                tocado = true;
            } else {
                abrirCarta();
            }
        }
    });
}

function reproducirMusica() {
    var audio = document.getElementById('audio');
    audio.play();
    // Ocultar el botón de música
    document.getElementById('boton-musica').style.display = 'none';
    // Mostrar el sobre
    document.getElementById('sobre').style.display = 'block';
}


// Función para voltear el sobre
function voltearSobre() {
    sobre.classList.add("volteado");
}

// Función para abrir la carta
function abrirCarta() {
    carta.classList.add("active");
}

// Función para cerrar la carta
function cerrarCarta() {
    carta.classList.remove("active");
    sobre.classList.remove("volteado"); // Voltear el sobre de nuevo al cerrar la carta
}
