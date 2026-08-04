// =============================================
// Librería Independiente Raíz
// Archivo: js/app.js
// =============================================

// ===============================
// MENÚ HAMBURGUESA
// ===============================

const menu = document.querySelector(".menu");
const botonMenu = document.querySelector(".menu-hamburguesa");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}

// ===============================
// CERRAR MENÚ AL HACER CLIC
// ===============================

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            menu.classList.remove("activo");

        }

    });

});

// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================

const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación nombre

        if (nombre.length < 3) {

            alert("El nombre debe tener al menos 3 caracteres.");

            return;

        }

        // Validación correo

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correo)) {

            alert("Ingresa un correo electrónico válido.");

            return;

        }

        // Validación teléfono

        if (telefono !== "") {

            const soloNumeros = /^[0-9]{7,15}$/;

            if (!soloNumeros.test(telefono)) {

                alert("El teléfono solo debe contener números (7 a 15 dígitos).");

                return;

            }

        }

        // Validación asunto

        if (asunto.length < 5) {

            alert("El asunto es demasiado corto.");

            return;

        }

        // Validación mensaje

        if (mensaje.length < 10) {

            alert("Escribe un mensaje más detallado.");

            return;

        }

        const mensajeAnterior = document.querySelector(".mensaje-exito");

        if (mensajeAnterior) {

            mensajeAnterior.remove();
        
        }

        const mensaje = document.createElement("div");

        mensaje.classList.add("mensaje-exito");

        mensaje.textContent =
        "¡Gracias! Hemos recibido tu mensaje y responderemos lo antes posible.";

        formulario.appendChild(mensaje);

        formulario.reset();

        setTimeout(() => {

            mensaje.remove();

        }, 5000);
    });

}

// ===============================
// BOTONES "VER MÁS"
// ===============================

const botones = document.querySelectorAll(".tarjeta button");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        alert("Próximamente podrás consultar toda la información del libro.");

    });

});

// ===============================
// EFECTO HEADER AL HACER SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "0 6px 18px rgba(0,0,0,.15)";

    }

});

// ===============================
// SCROLL SUAVE PARA ENLACES
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(ancla => {

    ancla.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// AÑO AUTOMÁTICO EN EL FOOTER
// ===============================

const copyright = document.querySelector(".copyright p");

if (copyright) {

    const año = new Date().getFullYear();

    copyright.innerHTML =
        `© ${año} Librería Independiente Raíz | Todos los derechos reservados.`;

}

// ===============================
// ANIMACIÓN AL CARGAR LA PÁGINA
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===============================
// EVENTOS
// ===============================

const botonesEventos = document.querySelectorAll(".evento-btn");

botonesEventos.forEach(boton => {

    boton.addEventListener("click", () => {

        alert("Pronto podrás inscribirte a este evento desde la página web.");

    });

});

// ===============================
// FAQ
// ===============================

const preguntas = document.querySelectorAll(".faq-item");

preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

        console.log("Pregunta seleccionada:", pregunta.querySelector("h3").textContent);

    });

});

// ===============================
// SERVICIOS
// ===============================

const tarjetasServicios = document.querySelectorAll(".servicio");

tarjetasServicios.forEach(servicio => {

    servicio.addEventListener("mouseenter", () => {

        servicio.style.cursor = "pointer";

    });

});

// ===============================
// FIN DEL ARCHIVO
// ===============================