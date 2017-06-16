let a = 2,
    b = 5,
    c = 1;

let min = a,
    max = a,
    sum = a,
    mean = a;

let arr = [a,b,c]

for(i in arr) {

    if(min > arr[i]) {
        min = arr[i]
    }

    if(max < arr[i]) {
        max = arr[i]
    }

    sum +=arr[i]
}

mean = (sum / arr.length).toFixed(2);

console.log(min,max,sum,mean);
