let a = 5;

for(let i=1, z=1;i <= a; i++,z++){
    let out = "";
    for(let i=z;i < a+z;i++) {
        out += (i + ' ')
    }
    console.log(out);
}

