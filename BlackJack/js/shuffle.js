 var array =  new Array()
 var newArray = new Array;
 var count = 1 

$(function () { 
	
	$('#shuffle').click(function(){
		if (count >= 4){
			array.empty()
			count = 1
		}
		for(j=1;j<53;j++){
			array.push(j);
		};
		$('#cards').html(shuffle(array));
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
			newArray.push(i +" ")
		};
		return newArray;
	};

	$('#deal').click(function(){
		var card = newArray.pop(count)
		$('#card'+count).html(card)
		count++
	});
});
