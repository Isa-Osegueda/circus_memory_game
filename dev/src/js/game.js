let play2 = '';
let play1 = '';
let identifyJ1 = '';
let identifyJ2 = '';
let hits = 0;
let img = '';
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');

const cards = [
  { numberCard: '1', selection: false }, { numberCard: '2', selection: false },
  { numberCard: '0', selection: false }, { numberCard: '9', selection: false },
  { numberCard: '3', selection: false }, { numberCard: '4', selection: false },
  { numberCard: '5', selection: false }, { numberCard: '6', selection: false },
  { numberCard: '7', selection: false }, { numberCard: '8', selection: false },
  { numberCard: '1', selection: false }, { numberCard: '2', selection: false },
  { numberCard: '3', selection: false }, { numberCard: '4', selection: false },
  { numberCard: '5', selection: false }, { numberCard: '6', selection: false },
  { numberCard: '0', selection: false }, { numberCard: '9', selection: false },
  { numberCard: '7', selection: false }, { numberCard: '8', selection: false },
];

function startGame() {
  cards.sort(() => { return 0.5 - Math.random(); });
  for (let i = 0; i < 20; i += 1) {
    const card = cards[i].numberCard;
    const data = document.getElementById(i.toString());
    data.dataset.valor = card;
    data.src = `img/${card}.png`;
  }
  setTimeout(() => {
    for (let i = 0; i < 20; i += 1) {
      const card = cards[i].numberCard;
      const data = document.getElementById(i.toString());
      data.dataset.valor = card;
      data.src = 'img/bigTop.png';
    }
  }, 3000);
}

function clean() {
  play1 = '';
  play2 = '';
  identifyJ1 = '';
  identifyJ2 = '';
}

function check() {
  hits = 0;
  for (let i = 0; i < 20; i += 1) {
    if (cards[i].selection === true) {
      hits += 1;
    }
  }

  if (hits === 20) {
    document.getElementById('game').innerHTML = 'GANASTE';
    alert('felicidades');
  }
}

function turnLetter() {
  const action = window.event;
  play2 = action.target.dataset.valor;
  identifyJ2 = action.target.id;
  img = action.target;
  const imgP = img.dataset.valor;

  if (play1 !== '') {
    if (play1 === play2 && identifyJ1 !== identifyJ2 && cards[parseInt(identifyJ2, 10)].selection !== true && cards[parseInt(identifyJ1, 10)].selection !== true) {
      cards[parseInt(identifyJ1, 10)].selection = true;
      cards[parseInt(identifyJ2, 10)].selection = true;
      img.src = `img/${imgP}.png`;
      score.innerText = hits += 100;
      highScore.innerText = score.innerText;
      check();
      clean();

    } else if (identifyJ1 !== identifyJ2) {
      setTimeout(() => {
        document.getElementById(identifyJ2).src = 'img/bigTop.png';
        document.getElementById(identifyJ1).src = 'img/bigTop.png';
        clean();
        score.innerText = hits -= 50;
        highScore.innerText = score.innerText;
      }, 200);
      img.src = `img/${imgP}.png`;
    } 
  } else if (play2 !== 'valor') {
      img.src = `img/${imgP}.png`;
      play1 = play2;
      identifyJ1 = identifyJ2;
    }
}

function resetGame() {
  cards.sort(() => { return 0.5 - Math.random(); });
  for (let i = 0; i < 20; i += 1) {
    const card = cards[i].numberCard;
    const data = document.getElementById(i.toString());
    data.dataset.id = card;
  }
}
