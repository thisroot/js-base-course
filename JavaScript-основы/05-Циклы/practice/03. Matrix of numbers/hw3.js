let a = 5;
let out = null;

for(let i=1, z=1;i <= a; i++){
    out = '';
    for(let i=z;i <= a+z;i++) {
        out += (i + ' ')
    }
    console.log(out);
    z++
}
