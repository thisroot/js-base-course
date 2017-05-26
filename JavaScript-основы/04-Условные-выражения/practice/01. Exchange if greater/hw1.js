let a = 6,
    b = 4,
    c = null;

if(a > b) {
    c = b;
    b = a;
    a = c;
}

console.log(a,b);