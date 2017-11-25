var cards = new Array(
    { numberCard: '1', seleccion: false }, { numberCard: '2', seleccion: false },
    { numberCard: '0', seleccion: false }, { numberCard: '9', seleccion: false },
    { numberCard: '3', seleccion: false }, { numberCard: '4', seleccion: false },
    { numberCard: '5', seleccion: false }, { numberCard: '6', seleccion: false },
    { numberCard: '7', seleccion: false }, { numberCard: '8', seleccion: false },
    { numberCard: '1', seleccion: false }, { numberCard: '2', seleccion: false },
    { numberCard: '3', seleccion: false }, { numberCard: '4', seleccion: false },
    { numberCard: '5', seleccion: false }, { numberCard: '6', seleccion: false },
    { numberCard: '0', seleccion: false }, { numberCard: '9', seleccion: false },
    { numberCard: '7', seleccion: false }, { numberCard: '8', seleccion: false });


function startGame() {
    var data = document.getElementById("game");
        cards.sort(function () { return Math.random() - 0.5 });
        for (var i = 0; i < 20; i++) {
            var card = cards[i].numberCard;
            var data = document.getElementById(i.toString());
            data.dataset.id = card;
            data.src = 'img/' + card + '.png';
            console.log(card);       
        } 
        setTimeout(() => {
            for (var i = 0; i < 20; i++) {
            var card = cards[i].numberCard;
            var data = document.getElementById(i.toString());
            data.dataset.id = card;
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



