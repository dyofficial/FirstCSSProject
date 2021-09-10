let firstCard =
  getRandomCard(); /* insert getRandomCard function to replace hard coded value*/

let secondCard =
  getRandomCard(); /* insert getRandomCard function to replace hard coded value*/
//new addition to correct the rendering of ALL cards instead of firstCard and secondCard
let cards = [];

let sum = 0;

let hasBlackJack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Daniel",
  chips: 200,
};

let playerEL = document.getElementById("player-el");

playerEL.textContent = `${player.name}: $${player.chips}`;
//afterchanging startgame() to rendergame(), we need to create a new startgame function that calls rendergame function
//Random card generator function
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

//console.log(sum);
//if & else if logic
function renderGame() {
  //renders out firstCard and secondCard
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent = `Sum: ${sum} `;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card =
      getRandomCard(); /* insert getRandomCard function to replace hard coded value*/
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
//        start       finish      step
//for (let i = 10; i < 101; i += 10) {
//  console.log(i);
//}
//let sentence = ["Hello", "my", "name", "is", "Per"];
//let greetingEL = document.getElementById("greeting-el");
//for (let i = 0; i < sentence.length; i++) {
//  greetingEL.textContent += `${sentence[i]} `;
//}
//let player1Time = 102;
//let player2Time = 107;
//function getTotalRaceTime() {
//  return player1Time + player2Time;
//}
//let totalRaceTime = getTotalRaceTime();
//console.log(totalRaceTime);
//let randomNumber = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber);
//function rollDice() {
//  return randomNumber;
//}
//rollDice();
//let hasSolvedChallenge = false;
//let hasHintsLeft = false;
//if (hasSolvedChallenge === false && hasHintsLeft === false) {
//  showSolution();
//}
//function showSolution() {
//  console.log("Showing the solution...");
//}
//let likesDocumentaries = true;
//let likesStartups = false;
//if (likesDocumentaries === true || likesStartups === false) {
//  recommendMovie();
//}
//function recommendMovie() {
//  console.log("Check out this movie");
//}
//let human = {
//  nom: "Daniel",
//  agee: 28,
//  country: "Ghana",
//};
//function logData() {
//  console.log(`${human.nom} is ${human.agee} and lives in ${human.country}`);
//}
//logData();
//let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
//for (let i = 0; i < largeCountries.length; i++) {
//  console.log(`The 5 largest countries in the world: ${largeCountries[i]}`);
//}
let hands = ["rock", "paper", "scissor"];
function getHand() {
  let randomItem = Math.floor(Math.random() * 3);
  return hands[randomItem];
}
console.log(getHand());
