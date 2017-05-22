function thirdNumber(item) {
    return (Math.round((item/100)%10) == 7) + 
            " - " + 
            Math.round((item/100)%10);
}

console.log(thirdNumber(2124201))