var cards = new Array(
    { numberCard: '1', selection: false }, { numberCard: '2', selection: false },
    { numberCard: '0', selection: false }, { numberCard: '9', selection: false },
    { numberCard: '3', selection: false }, { numberCard: '4', selection: false },
    { numberCard: '5', selection: false }, { numberCard: '6', selection: false },
    { numberCard: '7', selection: false }, { numberCard: '8', selection: false },
    { numberCard: '1', selection: false }, { numberCard: '2', selection: false },
    { numberCard: '3', selection: false }, { numberCard: '4', selection: false },
    { numberCard: '5', selection: false }, { numberCard: '6', selection: false },
    { numberCard: '0', selection: false }, { numberCard: '9', selection: false },
    { numberCard: '7', selection: false }, { numberCard: '8', selection: false });

var play2 = "";
var play1 = "";
var identifyJ1 = "";
var identifyJ2 ="";
var hits = 0;
var img = "";

function startGame() {
    var data = document.getElementById("game");
        cards.sort(function () { return Math.random() - 0.5 });
        for (var i = 0; i < 20; i++) {
            var card = cards[i].numberCard;
            var data = document.getElementById(i.toString());
            data.dataset.valor = card;
            data.src = 'img/' + card + '.png';
                   
        } 
        setTimeout(() => {
            for (var i = 0; i < 20; i++) {
            var card = cards[i].numberCard;
            var data = document.getElementById(i.toString());
            data.dataset.valor = card;
            data.src = 'img/bigTop.png';
            }                 
        }, 3000);       
}

function resetGame() {
    var data = document.getElementById("game");
    cards.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 20; i++) {
        var card = cards[i].numberCard;
        var data = document.getElementById(i.toString());
        data.dataset.id = card;
    }   
}
    
function vaciar() {
    play1 = "";
    play2 = "";

    identifyJ1 = "";
    identifyJ2 = "";
    
}

function comprobar() {
    var hits = 0;
    for (var i = 0; i < 20; i++) {

        if (cards[i].selection == true) {
            hits++;
        }

    }

    if (hits == 20) {
        document.getElementById("game").innerHTML = "GANASTE";
    }

}



function turnLetter() {
    var action = window.event;

    play2 = action.target.dataset.valor;
    identifyJ2 = action.target.id;
    img = action.target;
    var imgP = img.dataset.valor;
    //var selection = cards.selection;
    
    //var img = identifyJ2.dataset.valor;
    console.log(identifyJ2);
    console.log(play2);
    console.log(img);
    console.log(imgP);


    if (play1 !== "") {

        if (img === play2 && identifyJ1 !== identifyJ2 && cards[parseInt(identifyJ2)].selection != true && cards[parseInt(identifyJ1)].selection != true) {

            cards[parseInt(identifyJ1)].selection = true;
            cards[parseInt(identifyJ2)].selection = true;
            console.log('pareja');
            img.src = 'img/' + imgP + '.png';
            vaciar();
            comprobar();

        } else if (identifyJ1 !== identifyJ2) {
            var self = this;
            setTimeout(function () {
                img.src = 'img/bigTop.png';
                
                
                vaciar();
            }, 200);

            img.src = 'img/' + imgP + '.png';
        }
     } else if (play2 !== "valor") {

         img.src = 'img/' + imgP + '.png';
         play1 = play2;
         identifyJ1 = identifyJ2;
         
     }                      
}

function changeImage(posicion) {
    document.getElementById(posicion + '.png');
    //document.getElementById(posicion.toString()).innerHTML = contenido;
}	







