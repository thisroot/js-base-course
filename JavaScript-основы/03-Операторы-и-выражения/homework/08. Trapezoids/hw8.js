function squareTrapeozoid(a,b,h) {
    if(((a || b || h) > 500) || 
        ((a || b || h) < -500)) {
        return false;
    }
    
    return ((((a + b)/2)*h).toFixed(7));
}

console.log(squareTrapeozoid(8.5,4.3,2.7))