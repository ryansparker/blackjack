let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let thirdCard =  Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard;
let message = ""
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let btnStart = document.getElementById('btn-start');
let btnNewCard = document.getElementById('btn-new');

function startGame() {

	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "woo hoo! Blackjack"
	} else  {
		message = "you out!!"
	}
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
	sumEl.textContent = "Sum: " + sum
	messageEl.textContent = message
}

function newCard() {
sum += thirdCard;
	startGame();
}


