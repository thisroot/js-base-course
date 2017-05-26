let a = 8.5,
    b = 4.3,
    h = 2.7;

let out = true;


if(((a || b || h) > 500) || 
    ((a || b || h) < -500)) {
    out = false;
} else {
    out = ((((a + b)/2)*h).toFixed(7));
}

console.log(out)