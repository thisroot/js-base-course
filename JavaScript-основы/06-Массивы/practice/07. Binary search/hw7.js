arr = [ '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];

let searchElement = 77

let stop = arr.length;
let last = -1, 
    p = 0, 
    delta = 0;

    do {
        
        last = p;

        if (arr[p] > searchElement) {
            stop = p;
            p -= delta;
        } else if (arr[p] === searchElement) {
            return p;
        }

        delta = Math.floor((stop - p) / 2);
        p += delta; //if delta = 0, p is not modified and loop exits

    } while (last !== p);


console.log(p)


