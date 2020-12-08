// Displays the color for the Player and Dealer cards
let pSelect = document.getElementById('player-select');
pSelect.style.background = "lightblue";
let dSelect = document.getElementById('dealer-select');
dSelect.style.background = "lightblue";

// Displays the selected card for the player and dealer
let pDeal = document.getElementById('player-deal');
pDeal.style.display = "none";
let dDeal = document.getElementById('dealer-deal');
dDeal.style.display = "none";

let cardSuit = ["♠", "♥", "♦", "♣"];
let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerCard = [];
let dealerCard = [];

let pScore = document.getElementById("player-score");
let dScore = document.getElementById("dealer-score");

let playerScore = 0;
let dealerScore = 0;

let pPlaced = document.getElementById("player-placed");
let dPlaced = document.getElementById("dealer-placed");

pSelect.addEventListener("click", generateCard);

function colorChange(suit) {
  if (cardSuit[suit] === "♥" || cardSuit[suit] === "♦") {
    pDeal.style.color = "red";
    dDeal.style.color = "red";
  } else {
    pDeal.style.color = "black";
    dDeal.style.color = "black";
  }
}
function showCard() {
  pDeal.style.display = "block";
  dDeal.style.display = "block";
}
function generateCard() {
  showCard();
  let rSuit = Math.floor(Math.random() * 4) + 0;
  let rValue = Math.floor(Math.random() * 13) + 0;
  let rSuit2 = Math.floor(Math.random() * 4) + 0;
  let rValue2 = Math.floor(Math.random() * 13) + 0;
  let total = cardSuit[rSuit] + cardValue[rValue];
  let rtotal = cardSuit[rSuit2] + cardValue[rValue2];
  let ptotal = cardSuit[rSuit] + "\n" + cardValue[rValue];
  let dtotal = cardSuit[rSuit2] + "\n" + cardValue[rValue2];
  console.log(total + " " + rtotal);
    colorChange(rSuit);
    colorChange(rSuit2);
    points(rValue2, rValue);
    hand(playerCard, total, pPlaced);
    hand(dealerCard, rtotal, dPlaced);
  pDeal.innerText = ptotal;
  dDeal.innerText = dtotal;
  return total;
}
function points(rSuit, pSuit) {
  if (rSuit > pSuit) {
    playerScore++;
    dScore.innerText = "Score: " + playerScore;
    console.log(playerScore);
  } else if (pSuit > rSuit) {
    dealerScore++;
    pScore.innerText = "Score: " + dealerScore;
    console.log(dealerScore);
  } else if (pSuit === rSuit) {
    document.getElementById('war-title').innerText = "War Declared";
    modal.style.display = "block";
  }
  if (playerScore > 26 && dealerScore < 26) {
    document.getElementById('war-title').innerText = "You Win";
    modal.style.display = "block";
    playerScore = 0;
    dealerScore = 0;
    dScore.innerText = "Score: " + playerScore;
    pScore.innerText = "Score: " + dealerScore;
    console.log(playerScore);
    console.log(dealerScore);
    playerCard.splice(0, playerCard.length);
    dealerCard.splice(0, dealerCard.length);
    playerCard = [];
    dealerCard = [];
    pPlaced.innerText = playerCard.toString();
    dPlaced.innerText = dealerCard.toString();
  } else if (dealerScore > 26 && playerScore < 26) {
    document.getElementById('war-title').innerText = "You Lose";
    modal.style.display = "block";
    playerScore = 0;
    dealerScore = 0;
        dScore.innerText = "Score: " + playerScore;
        pScore.innerText = "Score: " + dealerScore;
    console.log(playerScore);
    console.log(dealerScore);
    playerCard = [];
    dealerCard = [];
    console.log(playerCard.length);
    console.log(dealerCard.length);
    pPlaced.innerText = playerCard.toString();
    dPlaced.innerText = dealerCard.toString();
  }
}

function hand(dealhand, total, place) {
    dealhand.push(total);
    return place.innerText = dealhand.toString();
}

let modal = document.getElementById("modal");

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
