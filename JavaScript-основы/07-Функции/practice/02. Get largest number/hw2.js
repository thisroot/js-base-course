let a = 4,
    b = 5,
    c = 6;

function GetMax(a,b,c) {
    // arguments
    let max;
    switch(true){
            case((a>=b)&&(a>=c)):
                max = a; break;
            case(b>=c):
                max = b; break;
            default:
                max=c;
            }
    
    console.log(max);
}

GetMax(a,b,c);