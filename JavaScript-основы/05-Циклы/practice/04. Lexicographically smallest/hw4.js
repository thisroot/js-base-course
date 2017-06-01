let min

for (let el in process) {
   if(el == Object.keys(process)[0]) {
       min = el;
   }
    if(min > el ) {
        min = el
    }
}

console.log(min);
