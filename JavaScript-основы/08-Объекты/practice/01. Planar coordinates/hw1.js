
function Point(ox,oy) {
    return {
        x:ox,
        y:oy
    }
}

function Line(p1,p2) {
    return {
        point1: p1,
        point2: p2,
        length: (Math.sqrt(
                Math.pow(p1.x - p2.x,2) +
                Math.pow(p1.y-p2.y,2)).toFixed(2)
            )
        }
    }


function checkTriangle(l1,l2,l3) {
    // сумма двух любых сторон должна быть больше третей
    if(
        (l1.length + l2.length > l3.length) &&
        (l1.length + l3.length > l2.length) &&
        (l2.length + l3.length > l1.length)
    ) {
       return "Можно построить";
    } else {
      return "Нельзя построить";
    }
}

let point11 = new Point(7,7);
let point12 = new Point(2,2);
let point21 = new Point(5,6);
let point22 = new Point(2,2);
let point31 = new Point(95,-14.5);
let point32 = new Point(0,-0.123);

let line1 = new Line(point11,point12);
let line2 = new Line(point21,point22);
let line3 = new Line(point31,point32);

console.log(line1.length,
            line2.length,
            line3.length,
            checkTriangle(line1,line2,line3)
           )
