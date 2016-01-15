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
