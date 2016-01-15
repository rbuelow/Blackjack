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

  console.log(array);
}