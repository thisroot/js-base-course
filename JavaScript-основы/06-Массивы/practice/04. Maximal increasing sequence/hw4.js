arr = ['8', '7', '2', '3', '4', '2', '2', '4', '1', '2', '3', '4']

let q = 1;
let e = -1;
let max = -1;
let pos = -1;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    if (arr[i] < arr[i - 1]) {
      pos = i
    }
    q++;
    if (max < q) {
      max = q;
      start = pos;
    }
  } else {
    q = 1;
  }
}

console.log("длина " + max + " элемента, начиная с позиции " + start);
