let a = -2,
    b = -2,
    c = 1;


if(a == 0 || b == 0 || c == 0) {
    console.log('0')
} else if((a < 0 && b < 0) ||
          (b < 0 && c < 0) ||
          (c<0 && a < 0)) {
    console.log('+')
} else {
    console.log('-')
}
    