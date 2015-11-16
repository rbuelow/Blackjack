$(".load").click(function load(){
var deck = [
  "hA", 
  "h2", 
  "h3", 
  "h4", 
  "h5", 
  "h6", 
  "h7", 
  "h8", 
  "h9", 
  "h10", 
  "hJ", 
  "hQ", 
  "hK", 
  "dA", 
  "d2", 
  "d3", 
  "d4", 
  "d5", 
  "d6", 
  "d7", 
  "d8", 
  "d9", 
  "d10", 
  "dJ", 
  "dQ", 
  "dK", 
  "cA",
  "c2", 
  "c3", 
  "c4", 
  "c5", 
  "c6", 
  "c7", 
  "c8", 
  "c9", 
  "c10", 
  "cJ", 
  "cQ",
  "cK", 
  "sA",
  "s2", 
  "s3", 
  "s4", 
  "s5", 
  "s6", 
  "s7", 
  "s8", 
  "s9",
  "s10", 
  "sJ", 
  "sQ",
  "sK", 
]
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

$(".draw").click(function pullCard(){
  var deck = JSON.parse(localStorage["deck"]);
  var card = deck.pop();
  var cardAmount;
  $.each(theDeck, function(key, value){
	  if (key === card)
		  cardAmount = value 
  });
  var stringCard = cardAmount.toString();
  localStorage["deck"] = JSON.stringify(deck);
  $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
  $("li:last").append(stringCard);
});

$(".deal").click(function pullCard(){
  var deck = JSON.parse(localStorage["deck"]);
  for (var x = 0; x<2; x++){
  var cardOne = deck.pop();
  var cardTwo = deck.pop();
  var cardAmount1
  var cardAmount2
    $.each(theDeck, function(key, value){
	  if (key === cardOne)
		  cardAmount1 = value 
	  if (key === cardTwo)
		  cardAmount2 = value
  });
  var stringCardOne = cardAmount1.toString();
  var stringCardTwo = cardAmount2.toString();
  localStorage["deck"] = JSON.stringify(deck);
  $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
  $(".dealer li:last").append(stringCardOne);
  $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
  $(".player li:last").append(stringCardTwo);
}
});
