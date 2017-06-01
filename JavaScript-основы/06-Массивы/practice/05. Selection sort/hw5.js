arr = ['6', '3', '4', '1', '5', '2', '6']


for (let min=0;min < arr.length-1; min++) {
    let least = min;
    for (let j= min+1; j< arr.length;j++) {
        if(arr[j] < arr[least]) {
            least = j;
        }
    }
    let tmp = arr[min];
    arr[min] = arr[least];
    arr[least] = tmp;
}

console.log(arr);