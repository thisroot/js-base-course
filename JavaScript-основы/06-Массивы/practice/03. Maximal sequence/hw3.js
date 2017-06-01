arr = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']

let q = 1;
let e = -1;
let max = -1;
let pos = -1;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
        q++;
        if (max < q) {
            max = q;
            pos = i;
            e = arr[i];
        }
    } else {
        q = 1;
    }
}

console.log("элемент " + e + " повторяется " + max + " раз, начиная с позиции " + pos);