// reference: https://youtu.be/NxRwIZWjLtE
import Deck from "./deck.js"

export default class AudioController {
  constructor() {
    this.sandSound = new Audio('audio/sand.mp3')
    this.jingleSound = new Audio('audio/jingle.wav')
    this.fluteSound = new Audio('audio/flute.wav')
    this.celloSound = new Audio('audio/cello.wav')

  }

  sand() {
    this.sandSound.play();
  }

  jingle() {
    this.jingleSound.play();
  }

  flute() {
    this.fluteSound.play();
  }

  cello() {
    this.celloSound.play();
  }
}

const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerCardSlot2 = document.querySelector(".computer-card-slot2")
const playerCardSlot2 = document.querySelector(".player-card-slot2")
const text = document.querySelector(".text")

let playerDeck, computerDeck, inRound, stop, oneDeck
var wins = 0;
var losses = 0;

const audioController = new AudioController();


document.getElementById("middle").addEventListener("click", () => {
  audioController.sand();
  if (stop) {
    startGame()
    return
  }

  if (inRound) {
    cleanBeforeRound()
  } else {
    flipCards()
  }
})


startGame()
function startGame() {
  const deck = new Deck();
  deck.shuffle();
  oneDeck = deck;
  inRound = false;
  stop = false;

  cleanBeforeRound()
}

function cleanBeforeRound() {
  inRound = false
  computerCardSlot.innerHTML = ""
  playerCardSlot.innerHTML = ""
  computerCardSlot2.innerHTML = ""
  playerCardSlot2.innerHTML = ""
  text.innerText = ""

}

function lose(){
  losses++;
  document.getElementById("losses").innerHTML = ("COMPUTER WINS " + losses);
}

function win(){
  wins++;
  document.getElementById("wins").innerHTML = ("PLAYER WINS " + wins);
}

function flipCards() {
  inRound = true
  oneDeck.shuffle();
  const playerCard = oneDeck.pop()
  const computerCard = oneDeck.pop()
  const playerCard2 = oneDeck.pop()
  const computerCard2 = oneDeck.pop()

  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())
  playerCardSlot2.appendChild(playerCard2.getHTML())
  computerCardSlot2.appendChild(computerCard2.getHTML())

  if (isRoundWinner(playerCard, playerCard2, computerCard, computerCard2) === true) {
    win();
    text.innerText = "WIN";

  } 
  else if (isRoundWinner(playerCard, playerCard2, computerCard, computerCard2) === false) {
    lose();
    text.innerText = "LOSS";

  } 
  else {
    text.innerText = "DRAW";
  }

  oneDeck.push(playerCard);
  oneDeck.push(playerCard2);
  oneDeck.push(computerCard);
  oneDeck.push(computerCard2);


  if (isGameOver(losses)) {
    text.innerText = "DEFEAT"
    document.getElementById('game-over-text').classList.add('visible');
    setTimeout(() =>{
      document.addEventListener("click", () => {
        location.reload();
      })
    }, 1000);
    stop = true;

  } else if (isGameOver(wins)) {
    text.innerText = "VICTORY"
    document.getElementById('victory-text').classList.add('visible');
    setTimeout(() =>{
      document.addEventListener("click", () => {
        location.reload();
      })
    }, 1000);
    stop = true;
  }
}

function isRoundWinner(playerCard1, playerCard2, computerCard1, computerCard2) {
  if(CARD_VALUE_MAP[playerCard1.value] > CARD_VALUE_MAP[computerCard2.value] && CARD_VALUE_MAP[playerCard2.value] > CARD_VALUE_MAP[computerCard1.value] ){
    return true;
    
  }
  else if(CARD_VALUE_MAP[playerCard1.value] < CARD_VALUE_MAP[computerCard2.value] && CARD_VALUE_MAP[playerCard2.value] < CARD_VALUE_MAP[computerCard1.value] ){
    return false;
  }

  else {
    return "draw";
  }
  
}

function isGameOver(results) {
  return results === 5;
}
