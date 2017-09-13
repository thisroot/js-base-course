Array.prototype.remove = function(num) {
    let ax
    while ((ax = this.indexOf(num)) !== -1) {
            this.splice(ax, 1);
        }
    return this
}

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,1]
arr.remove(1);
console.log(arr);
