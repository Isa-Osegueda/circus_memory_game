
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
    alert("empieza el juego");

    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 20; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        imageChange(i, "img/bigTop.png", 'holi');
        
    }
};

function resetearJuego() {
    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 20; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        imageChange(i, "img/bigTop.png", 'holi');
    }
}

function girarCarta() {
    var evento = window.event;

    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;


    if (jugada1 !== "") {

        if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {

            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;

            imageChange(identificadorJ2, "img/clown.png", jugada2);
            vaciar();
            comprobar(); console.log(indentificadorJ2);
        } else if (identificadorJ1 !== identificadorJ2) {
            var self = this;
            setTimeout(function () {
                imageChange(self.identificadorJ1, "img/bigTop", "?")
                imageChange(self.identificadorJ2, "img/bigTop", "?")
                vaciar()
            }, 200);

            imageChange(identificadorJ2, "img/clown.png" , jugada2);
        }
    } else if (jugada2 !== "valor") {

        imageChange(identificadorJ2, "img/clown.png", jugada2);

        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
};

function vaciar() {
    jugada1 = "";
    jugada2 = "";

    identificadorJ1 = "";
    identificadorJ2 = "";
}

function imageChange(position, image, content) {
    document.getElementById(position.toString()).src = image;
    document.getElementById(position.toString()).innerHTML = content;
}

function comprobar() {
    var aciertos = 0;
    for (var i = 0; i < 20; i++) {
        if (cartas[i].seleccion == true) {
            aciertos++;
        }

    }

    if (aciertos == 20) {
        document.getElementById("juego").innerHTML = "GANASTE";
    }
}


