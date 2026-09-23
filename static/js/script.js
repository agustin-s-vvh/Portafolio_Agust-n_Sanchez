const botonMenu = document.getElementById("boton-menu");
const menuEnlaces = document.getElementById("menu-enlaces");

botonMenu.addEventListener("click", () => {
    menuEnlaces.classList.toggle("activo");
});

document.querySelectorAll("#menu-enlaces a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuEnlaces.classList.remove("activo");
    });
});

document.addEventListener("click", evento => {
    if (
        !menuEnlaces.contains(evento.target) &&
        !botonMenu.contains(evento.target)
    ) {
        menuEnlaces.classList.remove("activo");
    }
});

document.querySelectorAll(".progress").forEach(progress => {
    progress.style.width = progress.dataset.width;
});

const formularioContacto = document.getElementById("formulario-contacto");

formularioContacto.addEventListener("submit", evento => {
    evento.preventDefault();

    const mensaje = document.createElement("div");

    mensaje.className = "mensaje-enviado";

    mensaje.innerHTML = `
        <div class="mensaje-icono">✓</div>
        <div class="mensaje-texto">
            <h3>¡Mensaje enviado!</h3>
            <p>Ha sido enviado tu mensaje correctamente.</p>
        </div>
        <button class="cerrar-mensaje">&times;</button>
    `;

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.classList.add("mostrar");
    }, 10);

    mensaje.querySelector(".cerrar-mensaje").addEventListener("click", () => {
        cerrarMensaje(mensaje);
    });

    setTimeout(() => {
        cerrarMensaje(mensaje);
    }, 5000);

    formularioContacto.reset();
});

function cerrarMensaje(mensaje) {
    mensaje.classList.remove("mostrar");

    setTimeout(() => {
        mensaje.remove();
    }, 400);
}

