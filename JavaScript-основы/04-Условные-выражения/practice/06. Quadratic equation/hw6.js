let a = 2,
    b = 5,
    c = -3

let discr = Math.pow(b,2) - 4 * (a * c);
let sqrDiscr = Math.sqrt(discr);

console.log(discr)

if (a == 0 && b == 0 && c == 0) {
    console.log("Неверные корни")
} else if (discr < 0){
    console.log("Нет решения")
} else if (discr == 0){
    console.log(((- b - sqrDiscr) / (2 * a)).toFixed(2));
} else if (discr > 0){
    console.log((((- b + sqrDiscr) / (2 * a)).toFixed(2) + ";     " + ((- b - sqrDiscr) / (2 * a)).toFixed(2)));
}
