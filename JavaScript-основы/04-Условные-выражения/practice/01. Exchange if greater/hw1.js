let a = 6,
    b = 4,
    tmp;

console.log(a,b);

if(a > b) {
    tmp = b;
    b = a;
    a = tmp;
}

console.log(a,b);
