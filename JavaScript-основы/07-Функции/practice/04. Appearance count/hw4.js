function countSameNums(arr, num) {
    let count = 0;
    for(let item of arr) {
        if(num == item) {
            count++
        }
    }
    return count;
}


let arr = [8,28,6,21,6,7856,73,73,56,73];
let num = 73;
let count = countSameNums(arr,num);
console.log(count);