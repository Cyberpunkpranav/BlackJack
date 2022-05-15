
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
 function addmoney(){
addmoneyEl.value = Number(addmoneyEl.value);
player.cash =addmoneyEl.value; 
console.log(player.cash);
playerEl.textContent = player.name + " : " + "$" + player.cash;
addmoneyEl.onreset;
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
function startgame(firstcard, secondcard) {
    cashflow();

    player.cash = player.cash - 3;
    if (player.cash < 1) {
        alerting();
        newcardEl.disabled = true;
        startgameEl.disabled = true;
        messageEl.textContent = "Please refill your wallet"

    } else {
        playerEl.textContent = player.name + " : " + "$" + player.cash;
    }
    firstcard = getrandomcard();
    secondcard = getrandomcard();
    cards = [firstcard, secondcard];
    cardsum = firstcard + secondcard;
    isAlive = true;
    rendergame();
}
function rendergame() {
    cardEl.textContent = "Cards : "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum : " + cardsum;
    if (cardsum === 21) {
        message = "You have got a blackjack";
        hasblackjack = true;
        newcardEl.disabled = true;
    } else if (cardsum < 21) {
        message = "Do you want to draw a new card";
    } else {
        message = "You are out of the game";
        isAlive = false;
        newcardEl.disabled = true;
    }
    messageEl.textContent = message;
    startgameEl.disabled = true;


}
function newcard() {
    if (hasblackjack === false && isAlive === true && player.cash != 0) {
        message = "Drawing a new card from the deck";
        messageEl.textContent = message;
        let thirdcard = getrandomcard();
        cards.push(thirdcard);
        cardsum += thirdcard;
        player.cash -= 1;
        playerEl.textContent = player.name + " : " + "$" + player.cash;
        rendergame();


    } else {
        newcardEl.disabled = true;
        alert();
    }
}

function newgame() {

    startnewgame();
}
function startnewgame(){
    firstcard = null;
    secondcard = null;
    thirdcard = null;
    messageEl.textContent="Want to play a Round?";
    cardEl.textContent = "Cards:";
    sumEl.textContent = "Sum : ";
    cashflow();

}
function cashflow(){
if (player.cash === 0){
    newcardEl.disabled = true;
    startgameEl.disabled = true;
messageEl.textContent="you are out of money";


} else if(player.cash === 1  ||player.cash===2){
   newcardEl.disabled = true;
startgameEl.disabled = true;
messageEl.textContent="Insufficient Balance to continue the game";
playerEl.textContent = player.name + " : " + "$" + player.cash;
}
else{
    newcardEl.disabled = false;
    startgameEl.disabled = false;
}
}

