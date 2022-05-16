
let cards = [];
let cardsum = 0;
let hasblackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let newcardEl = document.getElementById("newcard-el");
let playerEl = document.getElementById("player-el");
let startgameEl = document.getElementById("startgame-el");
let gameEl = document.getElementById("game-el");
let moneyEl = document.getElementById("money-el");
let addmoneyEl = document.getElementById("addmoney-el");
let player = {
    name: "Player",
    cash: 0
}

playerEl.textContent = player.name + " : " + "$" + player.cash;
function getrandomcard() {

    let num = Math.floor(Math.random() * 13) + 1;
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11;
    } else {
        return num;
    }
}
function startgame() {
    if (player.cash === 0) {
        newcardEl.disabled = true;
        startgameEl.disabled = true;
        messageEl.textContent = "you are out of money,Please refill your wallet";
    }
    else if (player.cash < 3) {
        newcardEl.disabled = true;
        startgameEl.disabled = true;
        messageEl.textContent = "Insufficient Balance,Please refill your wallet"

    } else{
        player.cash = player.cash - 3;
        playerEl.textContent = player.name + " : " + "$" + player.cash;
        let firstcard = getrandomcard();
        let secondcard = getrandomcard();
        cards = [firstcard, secondcard];
        cardsum = firstcard + secondcard;
        isAlive = true;
        rendergame();
    }
}
function rendergame() {
    cardEl.textContent = "Cards : "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum : " + cardsum;
    if (cardsum === 21) {
        messageEl.textContent = "You have got a blackjack";
        hasblackjack = true;
        newcardEl.disabled = true;
        startgameEl.disabled = true;
    } else if (cardsum < 21) {
        messageEl.textContent = "Do you want to draw a new card";
        startgameEl.disabled = true;
        newcardEl.disabled = false;
    } else {
        messageEl.textContent = "You are out of the game";
        isAlive = false;
        newcardEl.disabled = true;
        startgameEl.disabled = true;
    }
}

function newcard() {
   
    if (isAlive === true && player.cash >=1) {
      
        messageEl.textContent = "Drawing a new card from the deck";
        let thirdcard = getrandomcard();
        cards.push(thirdcard);
        cardsum += thirdcard;
        player.cash -= 1;
      rendergame();
        playerEl.textContent = player.name + " : " + "$" + player.cash;
    } else if( playercash < 1)  {
        messageEl.textContent = "Insufficient Balance,Please refill your wallet"
        rendergame();
    }
}

function newgame() {

    startnewgame();
}
function startnewgame() {
    firstcard = null;
    secondcard = null;
    thirdcard = null;
    messageEl.textContent = "Want to play a Round?";
    cardEl.textContent = "Cards:";
    sumEl.textContent = "Sum : ";
    startgameEl.disabled = false;
    newcardEl.disabled = false;
}
function addmoney() {
    addmoneyEl.value = Number(addmoneyEl.value);
    player.cash = addmoneyEl.value;
    playerEl.textContent = player.name + " : " + "$" + player.cash;
    
}
