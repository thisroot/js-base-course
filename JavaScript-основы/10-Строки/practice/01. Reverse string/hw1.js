String.prototype.reverse = function reverse(){
    return this.split("").reverse().join("");
}

var str = "привет"

console.log(str.reverse())
