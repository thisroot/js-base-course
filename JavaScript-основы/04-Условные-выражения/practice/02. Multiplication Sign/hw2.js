let a = 3,
    b = 3,
    c = 3;

if(a == 0 || b == 0 || c == 0) {
    console.log('0')
} else if(
          (a < 0 && b < 0 && c > 0) ||
          (b < 0 && c < 0 && a > 0) ||
          (c < 0 && a < 0 && b > 0) ||
          (a > 0 && b > 0 && c > 0)
        ) {
            console.log('+')
} else {
    console.log('-')
}
