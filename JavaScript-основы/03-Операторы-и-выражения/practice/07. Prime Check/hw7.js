
let num = -3,
    out = true;

if(num < 2) out = false;

//число  x является простым, если оно больше 1 и при этом делится без остатка только на  1 и на x.

for (var i = 2; i < num; i++) {
    if(num%i==0)
        out = false
}


console.log(out)