function load(){
  var array =  new Array()
  for(j=1;j<53;j++){
    array.push(j);
  }
  shuffle(array);
}
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
function pullCard(count){
  var deck = JSON.parse(localStorage["deck"]);
  var card = deck.pop();
  localStorage["deck"] = JSON.stringify(deck);
  document.getElementById("cardDisplay"+count).innerHTML = card;
}
count = 1;
function draw(){
  pullCard(count);
  count++;
}
