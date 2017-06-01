arr = ['hello','hallo']

for(let i=0; i < arr[0].length; i++ ) {
    if(arr[0][i] >= arr[1][i]) {
        if(arr[0][i] == arr[1][i]) {
            if((i == arr[0].length - 1) && (arr[1][i + 1])) {
                console.log("<")
                break;
            } else {
                if((i == arr[0].length - 1)) {
                    console.log("=")
                    break;
                }
            }
        } else {
            console.log(">")
            break;
        }
    } else {
        console.log("<")
        break;
    }
}
