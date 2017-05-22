function rectangle(h,w) {
    
    let perimeter = 2*(h + w);
    let square = (h*w)
    
    return {
        perimeter: perimeter,
        square: square
    }
}

let rec = rectangle(10,30);

console.log(rec.perimeter, rec.square);