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

function startGame() {
    var data = document.getElementById("game");
        cards.sort(function () { return Math.random() - 0.5 });
        for (var i = 0; i < 20; i++) {
            var card = cards[i].numberCard;
            var data = document.getElementById(i.toString());
            data.dataset.id = card;
            data.src = 'img/' + card + '.png';
                   
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


function turnLetter() {
    var action = window.event;

    play2 = action.target.dataset.id;
    identifyJ2 = action.target;
    var selection2 = cards.selection;
    var selection1 = cards.selection;
    console.log(identifyJ2);
    console.log(play2);

    
      
    if(play1 == ""){

        var img = identifyJ2.dataset.id;
        console.log(img);
        identifyJ2.src = 'img/' + img + '.png';

        if(img === play2){
            console.log('pareja encontrada');
        }

    }
   
   
};







