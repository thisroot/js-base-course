function oddEven(item) {
    return !!(item%2 == 0)
}

let oddEven2 = function(item) {
    return !!(item%2 == 0)
}

let a = 4,
    b = 5,
    c = 27,
    d = 56;

console.log(oddEven(a));
console.log(oddEven(b));
console.log(oddEven(c));
console.log(oddEven(d));


console.log(oddEven2(a));
console.log(oddEven2(b));
console.log(oddEven2(c));
console.log(oddEven2(d));
