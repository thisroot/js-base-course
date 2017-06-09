// Используем 2 предыдущих алгоритма
// 1. Сортируем массив
// 2. Затем определяем самую длинную последовательность.

arr = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']

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

let max = 0,
    q = 1,
    num = -1;

for(let i=0; i < arr.length -1; i ++) {
    if (arr[i] == arr[i + 1]) {
        q++;
        if (max < q) {
            max = q;
            num = arr[i]
        }
    } else {
        q = 1;
    }
}

console.log(num, max);
