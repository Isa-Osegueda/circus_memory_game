
var cartas = new Array(
    { nombre: '9', seleccion: false }, { nombre: '10', seleccion: false},
    { nombre: '1', seleccion: false }, { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false },
    { nombre: '1', seleccion: false }, { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false },
    { nombre: '9', seleccion: false }, { nombre: '10', seleccion: false });


var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";

function iniciarJuego() {
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;

    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
    }
};

function resetearJuego() {
    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
       
    }
}


function vaciar() {
    jugada1 = "";
    jugada2 = "";

    identificadorJ1 = "";
    identificadorJ2 = "";
}





