let min

console.log()

for (let el in document) {
   if(el == Object.keys(document)[0]) {
       min = el; 
   }
    if(min > el ) {
        min = el
    }
}

console.log(min);