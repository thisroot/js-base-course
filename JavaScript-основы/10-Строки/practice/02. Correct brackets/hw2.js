// str is the string to parse
function checkBrackets(str){
    // глубина
    // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
    var depth = 0;
    // по каждому символу в строке
    for(var i in str){
        if(str[i] == '('){
            // если строка является открывающей скобкой, увеличиваем глубину на 1
            depth ++;
        } else if(str[i] == ')') {
            // уменьшаем глубину на 1
            depth --;
        }
        // если глубина отрицательная, мы имеем закрывающую круглую скобку
        // перед любыми соответствующими открывающимися скобками
        if (depth < 0) return false;
    }
    // если глуюина положительная, значит у нас нет соответствующих закрывающих скобок
    if(depth > 0) return false;
    // OK !
    return true;
}
console.log(checkBrackets('( ( a + b ) / 5 – d )')); // true
console.log(checkBrackets('( ( ) a + b ) / 5 – d )')); // false
console.log(checkBrackets('( ) ) ( ( a + b ) / 5 – d )')); // false
