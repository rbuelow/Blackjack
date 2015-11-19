class Player{
	hand : Array<number> = [];
}

function makePlayer{
	 var player = new Player;
}

$(".hit").click(function pullCard(player) {
	var deck = JSON.parse(localStorage["deck"]);
	var card = deck.pop();
	var cardValue = getCardValue(card);
	player['hand'].push(cardValue)
	var stringCard = card.toString();
	localStorage["deck"] = JSON.stringify(deck);
	$(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
	$("li:last").append(stringCard);
});