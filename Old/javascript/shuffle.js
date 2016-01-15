// var Player = (function () {
//     function Player() {
//         this.hand = [];
//     }
//     Object.defineProperty(Player.prototype, "name", {
//         get: function () {
//             return Player._name;
//         },
//         set: function (val) {
//             Player._name = val;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     return Player;
// })();

var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return Player._name;
        },
        set: function (val) {
            Player._name = val;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
})();
var p1 = new Player(this.name);
var p2 = new Player(this.name);
p1.name = "tim";
p2.name = "mike";
console.log(p1.name);
console.log(p2.name);

// function makePlayer() {
//     var player = new Player;
// }
// var dealer = new Player();
// var playerX = new Player();

// dealer.name = 'dealer';
// playerX.name = 'player';

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

function getCardValue(card){
  var cardValue;
  $.each(theDeck, function(key,value){
    if (key == card){
      cardValue = value;
    };
  })
  return cardValue;
};

function pullCard(player){
  debugger;
  var deck = JSON.parse(localStorage["deck"]);
  var card = deck.pop();
  var cardValue = getCardValue(card);
  playerX.hand.push(cardValue)
  var stringCard = card.toString();
  localStorage["deck"] = JSON.stringify(deck);
  laycard(playerX.name, card);
};

function laycard(player, card){
  if(player === "dealer"){
    $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>")
    $("li:last").append(card);
  }
  if(player === "player"){
    $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
    $(".player li:last").append(card);
  }
};

$(".hit").click(function(){
  pullCard(playerX.name);
});

$(".deal").click(function (){
  for (var x = 0; x<2; x++){
    pullCard(playerX.name);
    debugger;
    pullCard(dealer.name);
}
});