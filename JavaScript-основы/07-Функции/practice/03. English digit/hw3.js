function getLastNumberAsWord(item) {

    if(!(+item)) {
        throw new Error("item is not number");
    }

    let out;
    switch(item%10){
            case(0):
                out = "Ноль"; break
            case(1):
                out = "Один"; break
            case(2):
                out = "Два"; break
            case(3):
                out = "Три"; break
            case(4):
                out = "Четыре"; break
            case(5):
                out = "Пять"; break
            case(6):
                out = "Шесть"; break
            case(7):
                out = "Семь"; break
            case(8):
                out = "Восемь"; break
            case(9):
                out = "Девять"; break
                  }

    console.log(out);
}

getLastNumberAsWord(1234);
