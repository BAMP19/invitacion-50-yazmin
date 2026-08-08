/* =========================================
   INVITADO
========================================= */
function generarInvitado(invitado) {

    if (!invitado) {
        return "Invitado";
    }

    switch (invitado.tipo) {

        case "senor":
            return `Sr. ${invitado.nombre}`;

        case "senora":
            return `Sra. ${invitado.nombre}`;

        case "pareja":
            return `Sr. ${invitado.nombre} y Sra.`;

        case "senorFamilia":
            return `Sr. ${invitado.nombre} y Familia`;

        case "familia":
            return `Familia ${invitado.nombre}`;

        case "senoraFamilia":
            return `Sra. ${invitado.nombre} y Familia`;

        case "senoraHijos":
            return `Sra. ${invitado.nombre} e hijo(s)`;

        case "senorHijos":
            return `Sr. ${invitado.nombre} e hijo(s)`;

        default:
            return invitado.nombre || "Invitado";
    }
}
const parametros =
    new URLSearchParams(window.location.search);

const id =
    parametros.get("id");

const invitado =
    invitados[id] || {
        tipo: "senor",
        nombre: "Invitado"
    };

const nombreInvitado =
    generarInvitado(invitado);  
const nombreSobre =
    document.getElementById("nombreInvitado");

if (nombreSobre) {

    nombreSobre.innerHTML =
        nombreInvitado;

}

/* =========================================
   INFORMACIÓN DEL EVENTO
========================================= */

const evento = {

    nombre: "Yazmin Pabón",

    edad: 50,

    fecha: "Sábado 5 de septiembre de 2026",

    hora: "8:00 PM",

    lugar: "Kra  21 # 10-14 retiro bajo",

    whatsapp: "573157304389",

    maps: ""

};


/* =========================================
   CREAR INVITACIÓN
========================================= */

document.getElementById("app").innerHTML = `

<div class="escena-sobre">


    <!-- =================================
         TARJETA
    ================================== -->

    <div
        class="tarjeta-salida"
        id="tarjetaSalida"
    >

        <div class="tarjeta">

            <!-- TEXTURA -->

            <img
                src="assets/img/textura-papel.png"
                class="textura-tarjeta"
                alt=""
            >


            <!-- MARCO -->

            <img
                src="assets/img/marco.png"
                class="marco-tarjeta"
                alt=""
            >


            <!-- CONTENIDO -->

            <div class="contenido-tarjeta">
            

    <div class="titulo-tarjeta">
        <p>ESTÁS INVITADO A <p><p>CELEBRAR<p>
    </div>

    <img
        src="assets/img/numero-50.png"
        class="numero-50"
        alt="50"
    >

    <div class="texto-anos">
        AÑOS
    </div>

    <div class="de">
        de
    </div>

    <div class="nombre-cumple">
        ${evento.nombre}
    </div>


    <div class="bloque-invitado">


        <h2>
            ${nombreInvitado}
        </h2>

    </div>


    <div class="mensaje">

        Con inmensa alegría, queremos invitarte
        a compartir con nosotros la celebración
        de mis 50 años de vida, una fecha llena
        de gratitud, recuerdos y nuevos sueños.

    </div>


    <div class="informacion">

        <div class="dato">

            <strong>¿CUÁNDO?</strong>

            <span>
                ${evento.fecha}
            </span>

        </div>

        <div class="dato">

            <strong>¿A QUÉ HORA?</strong>

            <span>
                ${evento.hora}
            </span>

        </div>

        <div class="dato">

            <strong>¿DÓNDE?</strong>

            <span>
                ${evento.lugar}
            </span>

        </div>

    </div>


   

</div>


               
            
               


            </div>

        </div>

    </div>



    <!-- =================================
         SOBRE
    ================================== -->

    <div
        class="sobre-animado"
        id="sobre"
    >


        <!-- CUERPO -->

        <div class="cuerpo-sobre"></div>


        <!-- SOLAPA -->

        <div class="solapa-sobre">


            <div class="texto-solapa">


                


                <div class="nombre">
                    ${nombreInvitado}
                </div>


                <div class="abrir">
                    TOQUE PARA ABRIR
                </div>


            </div>


        </div>


        <!-- SELLO -->

        <img
            src="assets/img/sello.png"
            class="sello-sobre"
            alt="Sello"
        >


    </div>

</div>

`;


/* =========================================
   ABRIR SOBRE
========================================= */

document
    .getElementById("sobre")
    .addEventListener("click", abrirSobre);


/* =========================================
   ANIMACIÓN
========================================= */
function abrirSobre() {

    const sobre =
        document.getElementById("sobre");

    const tarjeta =
        document.getElementById("tarjetaSalida");


    /*
       La solapa comienza a abrirse
    */

    sobre.classList.add(
        "sobre-abierto"
    );


    /*
       La tarjeta comienza a aparecer
    */

    setTimeout(() => {

        tarjeta.classList.add(
            "tarjeta-visible"
        );

    }, 350);


    /*
       EL SOBRE DESAPARECE
       prácticamente de inmediato
    */

    setTimeout(() => {

        sobre.classList.add(
            "sobre-retirado"
        );

    }, 450);

}