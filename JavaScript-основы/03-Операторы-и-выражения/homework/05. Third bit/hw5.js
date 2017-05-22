function thirdBit(item,num) {
    return ((item >> num)%2 == 0)?0:1
}

console.log(thirdBit(1024,3))