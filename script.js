const lluvia = document.getElementById("lluvia-flores");

const botonAbrir = document.getElementById("botonAbrir");
const botonRamo = document.getElementById("botonRamo");

const pantallaRamo = document.getElementById("pantallaRamo");
const botonContinuar = document.getElementById("botonContinuar");

const pantallaInicio = document.querySelector(".pantalla-inicio");

const pantallaIntro = document.getElementById("pantallaIntro");


// ==========================================
// LLUVIA DE DECORACIÓN
// ==========================================

const decoraciones = [
    {
        imagen: "assets/decoracion/hojas.png",
        cantidad: 10,
        minimo: 35,
        maximo: 65
    },

    {
        imagen: "assets/decoracion/flor-pixel.png",
        cantidad: 14,
        minimo: 20,
        maximo: 38
    },

    {
        imagen: "assets/decoracion/miku-flores.png",
        cantidad: 4,
        minimo: 45,
        maximo: 75
    }
];


decoraciones.forEach(tipo => {

    for (let i = 0; i < tipo.cantidad; i++) {

        const elemento = document.createElement("img");

        elemento.src = tipo.imagen;

        elemento.classList.add("elemento-caida");


        // Tamaño aleatorio

        const tamaño =
            Math.random() *
            (tipo.maximo - tipo.minimo)
            + tipo.minimo;

        elemento.style.width = `${tamaño}px`;


        // Posición horizontal

        elemento.style.left =
            `${Math.random() * 94 + 3}%`;


        // Velocidad

        const duracion =
            Math.random() * 12 + 18;

        elemento.style.animationDuration =
            `${duracion}s`;


        // Algunas comienzan a mitad de la caída

        const retraso =
            Math.random() * -25;

        elemento.style.animationDelay =
            `${retraso}s`;


        // Movimiento lateral

        const movimiento =
            Math.random() * 160 - 80;

        elemento.style.setProperty(
            "--movimiento",
            `${movimiento}px`
        );


        // Rotación

        const rotacion =
            Math.random() * 360;

        elemento.style.setProperty(
            "--rotacion",
            `${rotacion}deg`
        );


        lluvia.appendChild(elemento);
    }

});


// ==========================================
// BOTÓN "ABRIR MI REGALO"
// ==========================================

botonAbrir.addEventListener("click", function() {

    pantallaInicio.classList.add("oculta");

    pantallaIntro.classList.add("activa");

});


// ==========================================
// BOTÓN "QUIERO VERLO"
// ==========================================

botonContinuar.addEventListener("click", function() {

    pantallaIntro.classList.remove("activa");

    pantallaRamo.classList.add("activa");

});
botonRamo.addEventListener("click", function() {

    botonRamo.style.display = "none";

    document
        .getElementById("ramoMagico")
        .classList.add("visible");

    document
        .getElementById("botonSiguiente")
        .style.display = "inline-block";

});
// ==========================================
// IR A LA CAJITA DE SORPRESAS
// ==========================================

const botonSiguiente = document.getElementById("botonSiguiente");

const pantallaSorpresas =
    document.getElementById("pantallaSorpresas");

botonSiguiente.addEventListener("click", function() {

    pantallaRamo.classList.remove("activa");

    pantallaSorpresas.classList.add("activa");

});// ==========================================
// CARTA PARA ANTHO
// ==========================================

// Elementos de la carta

const tarjetaCarta = document.getElementById("abrirCarta");

const pantallaCarta = document.getElementById("pantallaCarta");

const sobreCarta = document.getElementById("sobreCarta");

const selloCarta = document.getElementById("selloCarta");

const papelCarta = document.getElementById("papelCarta");

const volverCarta = document.getElementById("volverCarta");

let temporizadorCarta;


// ==========================================
// ENTRAR A LA CARTA
// ==========================================

tarjetaCarta.addEventListener("click", function() {

    // Esconder la cajita de sorpresas
    pantallaSorpresas.classList.remove("activa");

    // Mostrar la pantalla de la carta
    pantallaCarta.classList.add("activa");

    // Preparar el sobre cerrado
    sobreCarta.classList.remove("abierto");

    papelCarta.classList.remove("visible");

});


// ==========================================
// ROMPER EL SELLO DE CERA
// ==========================================

selloCarta.addEventListener("click", function() {

    // Abrir el sobre
    sobreCarta.classList.add("abierto");

    // Esperar a que termine de levantarse la solapa
    temporizadorCarta = setTimeout(function() {

        // Revelar el papel de la carta
        papelCarta.classList.add("visible");

    }, 850);

});


// ==========================================
// VOLVER A LA CAJITA DE SORPRESAS
// ==========================================

volverCarta.addEventListener("click", function() {

    clearTimeout(temporizadorCarta);

    // Esconder la carta
    pantallaCarta.classList.remove("activa");

    // Regresar a las sorpresas
    pantallaSorpresas.classList.add("activa");

});
// ==========================================
// PEDACITOS DE TUS MUNDOS
// ==========================================

const tarjetaMundos = document.getElementById("abrirMundos");

const pantallaMundos = document.getElementById("pantallaMundos");

const volverMundos = document.getElementById("volverMundos");


// Abrir la colección

tarjetaMundos.addEventListener("click", function() {

    pantallaSorpresas.classList.remove("activa");

    pantallaMundos.classList.add("activa");

});


// Volver a la cajita

volverMundos.addEventListener("click", function() {

    pantallaMundos.classList.remove("activa");

    pantallaSorpresas.classList.add("activa");

});
// ==========================================
// UNA CANCIÓN PARA TI
// ==========================================

const tarjetaMusica = document.getElementById("abrirMusica");

const pantallaMusica = document.getElementById("pantallaMusica");

const volverMusica = document.getElementById("volverMusica");

const escucharMusica = document.getElementById("escucharMusica");

const mensajeMusica = document.getElementById("mensajeMusica");


// Aquí pondremos el enlace real de tu playlist
const enlaceAppleMusic = "";


// Abrir la sección de música

tarjetaMusica.addEventListener("click", function() {

    pantallaSorpresas.classList.remove("activa");

    pantallaMusica.classList.add("activa");

});


// Abrir Apple Music

escucharMusica.addEventListener("click", function() {

    if (enlaceAppleMusic === "") {

        mensajeMusica.textContent =
            "Aquí pondremos nuestra playlist cuando esté lista 💛";

        return;
    }

    window.open(enlaceAppleMusic, "_blank", "noopener,noreferrer");

});


// Volver a las sorpresas

volverMusica.addEventListener("click", function() {

    pantallaMusica.classList.remove("activa");

    pantallaSorpresas.classList.add("activa");

});
// ==========================================
// VALES PARA NOSOTROS
// ==========================================

const tarjetaVales = document.getElementById("abrirVales");

const pantallaVales = document.getElementById("pantallaVales");

const volverVales = document.getElementById("volverVales");

const tarjetasVale = document.querySelectorAll(".tarjeta-vale");

const valeRevelado = document.getElementById("valeRevelado");

const tituloVale = document.getElementById("tituloVale");

const textoVale = document.getElementById("textoVale");


// Abrir la sección de vales

tarjetaVales.addEventListener("click", function() {

    pantallaSorpresas.classList.remove("activa");

    pantallaVales.classList.add("activa");

    valeRevelado.classList.remove("visible");

});


// Descubrir cada vale

tarjetasVale.forEach(function(tarjeta) {

    tarjeta.addEventListener("click", function() {

        tituloVale.textContent = tarjeta.dataset.titulo;

        textoVale.textContent = tarjeta.dataset.mensaje;

        valeRevelado.classList.remove("visible");

        void valeRevelado.offsetWidth;

        valeRevelado.classList.add("visible");

    });

});


// Volver a la cajita de sorpresas

volverVales.addEventListener("click", function() {

    pantallaVales.classList.remove("activa");

    pantallaSorpresas.classList.add("activa");

});
// ==========================================
// ÚLTIMA SORPRESA
// ==========================================

// Elementos de la sorpresa final

const tarjetaFinal = document.getElementById("abrirFinal");

const pantallaFinal = document.getElementById("pantallaFinal");

const volverFinal = document.getElementById("volverFinal");

const estadoFinal = document.getElementById("estadoFinal");

const iconoFinal = document.getElementById("iconoFinal");


// Guardamos las sorpresas que Antho ha visitado

const sorpresasVisitadas = new Set();

const sorpresasNecesarias = [
    "abrirCarta",
    "abrirMundos",
    "abrirMusica",
    "abrirVales"
];


// Comprobar cuáles sorpresas ha abierto

sorpresasNecesarias.forEach(function(id) {

    const tarjeta = document.getElementById(id);

    tarjeta.addEventListener("click", function() {

        sorpresasVisitadas.add(id);

        // Cuando haya visitado las cuatro...

        if (sorpresasVisitadas.size === 4) {

            tarjetaFinal.disabled = false;

            iconoFinal.textContent = "💛";

            estadoFinal.textContent =
                "Ya puedes descubrir esta última sorpresa";

        }

    });

});


// ==========================================
// ABRIR LA SORPRESA FINAL
// ==========================================

tarjetaFinal.addEventListener("click", function() {

    pantallaSorpresas.classList.remove("activa");

    pantallaFinal.classList.add("activa");

});


// ==========================================
// VOLVER A LA CAJITA
// ==========================================

volverFinal.addEventListener("click", function() {

    pantallaFinal.classList.remove("activa");

    pantallaSorpresas.classList.add("activa");

});
// ==========================================
// POSTAL DE TERROR
// ==========================================

const botonTerror =
    document.getElementById("botonTerror");

const mensajeTerror =
    document.getElementById("mensajeTerror");


botonTerror.addEventListener("click", function() {

    mensajeTerror.classList.toggle("visible");

    if (mensajeTerror.classList.contains("visible")) {

        botonTerror.textContent =
            "Ocultar transcripción";

    } else {

        botonTerror.textContent =
            "Revelar mensaje";

    }

});