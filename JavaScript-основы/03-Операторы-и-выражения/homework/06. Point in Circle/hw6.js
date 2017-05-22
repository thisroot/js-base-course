function pointInCircle(x,y) {
    let center_x = 0,
        center_y = 0,
        radius = 2;
    return ((((x - center_x)**2 + (y - center_y)**2) <= radius**2)?"Да,":"Нет,") +
        " дистанция: " +
        (((x - center_x)**2 + (y - center_y)**2)**(1/2)).toFixed(2);
}

console.log(pointInCircle(1.5, -1))