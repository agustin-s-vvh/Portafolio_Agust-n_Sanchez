document.addEventListener("DOMContentLoaded", () => {

    const botonMenu = document.getElementById("boton-menu");
    const menuPrincipal = document.getElementById("menu-enlaces");

    if (botonMenu && menuPrincipal) {

        botonMenu.addEventListener("click", () => {
            menuPrincipal.classList.toggle("mostrar");
        });

        const enlaces = menuPrincipal.querySelectorAll("a");

        enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
                menuPrincipal.classList.remove("mostrar");
            });
        });
    }


    const barras = document.querySelectorAll(".nivel-progreso");

    function animarBarras() {

        barras.forEach((barra) => {

            const porcentaje = barra.getAttribute("data-width");
            const posicion = barra.getBoundingClientRect();

            if (
                posicion.top < window.innerHeight &&
                posicion.bottom >= 0
            ) {
                barra.style.width = porcentaje;
            }

        });
    }

    window.addEventListener("scroll", animarBarras);
    animarBarras();


    const secciones = document.querySelectorAll("section");
    const enlacesNavegacion = document.querySelectorAll(".menu-enlaces a");

    window.addEventListener("scroll", () => {

        let seccionActual = "";

        secciones.forEach((seccion) => {

            const limiteSuperior = seccion.offsetTop - 100;

            if (window.scrollY >= limiteSuperior) {
                seccionActual = seccion.getAttribute("id");
            }

        });

        enlacesNavegacion.forEach((enlace) => {

            enlace.classList.remove("seleccionado");

            if (
                enlace.getAttribute("href") === "#" + seccionActual
            ) {
                enlace.classList.add("seleccionado");
            }

        });

    });

});