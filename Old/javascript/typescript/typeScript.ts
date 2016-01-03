class Player{
	private _name: string;
	constructor(name: string) {
		this.name = name;
		
	}
	public get name(){
		return Player._name
	}

	public set name(val){
		Player._name = val
	}

}

var p1:Player = new Player(this.name);
var p2:Player = new Player(this.name);

p1.name = "tim";
p2.name = "mike";

console.log(p1.name);
console.log(p2.name);