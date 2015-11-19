var Player = (function () {
    function Player() {
        this.hand = [];
    }
    return Player;
})();

function makePlayer() {
    var player = new Player;
    return player;
}

$(".load").click(function load(){
  shuffle(deck);
});

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  array.toString;
  document.getElementById("deckdisplay").innerHTML = array;
  localStorage["deck"] = JSON.stringify(array);
}

$(".hit").click(function pullCard(player){
  var deck = JSON.parse(localStorage["deck"]);
  var card = deck.pop();
  var cardValue = getCardValue(card);
  player.hand.push(cardValue)
  var stringCard = card.toString();
  localStorage["deck"] = JSON.stringify(deck);
  $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
  $("li:last").append(stringCard);
});

$(".deal").click(function pullCard(){
  var deck = JSON.parse(localStorage["deck"]);
  for (var x = 0; x<2; x++){
  var cardOne = deck.pop();
  var cardTwo = deck.pop();
  var stringCardOne = cardOne.toString();
  var stringCardTwo = cardTwo.toString();
  localStorage["deck"] = JSON.stringify(deck);
  $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
  $(".dealer li:last").append(stringCardOne);
  $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
  $(".player li:last").append(stringCardTwo);
}
});

function getCardValue(card){
  var cardValue;
  $.each(theDeck, function(key,value){
    if (key == card){
      cardValue = value;
    };
  })
  return cardValue;
};