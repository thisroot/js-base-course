let x = 1.5,
    y = -1;

let center_x = 0,
    center_y = 0,
    radius = 2;
console.log( ((((x - center_x)**2 + (y - center_y)**2) <= radius**2)?"Да,":"Нет,") +
    " дистанция: " +
    (((x - center_x)**2 + (y - center_y)**2)**(1/2)).toFixed(2));