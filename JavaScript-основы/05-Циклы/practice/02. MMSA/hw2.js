let a = 2,
    b = 5,
    c = 1;

let min = a,
    max = a,
    sum = a,
    avg = a;

let arr = [a,b,c]

for(let i=0; i != arr.length; i++) {

    if(min > arr[i]) {
        min = arr[i]
    }

    if(max < arr[i]) {
        max = arr[i]
    }

    sum +=arr[i]
}

avg = +(sum / arr.length).toFixed(2)

console.log(min,max,sum,avg);
