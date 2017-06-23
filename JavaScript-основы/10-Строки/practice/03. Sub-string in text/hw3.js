var temp = "Это простая строка";

String.prototype.countSubstrings = function(str) {
  return (this.match(new RegExp(str, 'g')) || []).length;
}


console.log(temp.countSubstrings("о"));
