let x = 1,
    y = 2;

let c_center_x = 1,
    c_center_y = 1,
    c_radius = 1.5,

    r_center_x = 1,
    r_center_y = -1,
    r_width = 6,
    r_height = 2;



let inCircle =  (((x - c_center_x)**2 + (y - c_center_y)**2) <= c_radius**2)?"Внутри круга ":"Снаружи круга ";

let inRectangle =  ((r_center_x <= x) && (x <= (r_center_x + r_width)) && (r_center_y <= y) && (y <= (r_center_y + r_height)))?"Внтури прямоугольника":"Снаружи прямоугольника"

console.log(inCircle + inRectangle)

