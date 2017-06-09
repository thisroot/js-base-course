function moreThanNeighbors(arr){
    count = 0;
    for(let i = 1; i < arr.length - 1; i++) {
        if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
            count++
        }
    }
    return count;
}

let arr = [6, -26, -25, -28, 31, 2, 27];

console.log(moreThanNeighbors(arr));