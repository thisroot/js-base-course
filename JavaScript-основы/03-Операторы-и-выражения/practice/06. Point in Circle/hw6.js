// Точка
let x = 1.5,
    y = -1;
// Окружность
let center_x = 0,
    center_y = 0,
    radius = 2;

let k1 = (x - center_x),
    k2 = (y - center_y);
let gip = (k1**2 + k2**2)**(1/2)

let result = (gip > radius)?"Нет не входит ":"Входит " + gip; 
 
console.log(k1,k2,gip, result);
    
//console.log( ((((x - center_x)**2 + (y - center_y)**2) <= radius**2)?"Да,":"Нет,") +
//    " дистанция: " +
//    (((x - center_x)**2 + (y - center_y)**2)**(1/2)).toFixed(2));