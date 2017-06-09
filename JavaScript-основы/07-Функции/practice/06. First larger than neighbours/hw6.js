function firstMaxBetweenNeighbours(arr) {
    
    for(let i=1; i < arr.length; i++) {
        if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) return i
    }
    return -1
}

arr = [6, -26, -25, -28, 31, 2, 27]

console.log(firstMaxBetweenNeighbours(arr))
           