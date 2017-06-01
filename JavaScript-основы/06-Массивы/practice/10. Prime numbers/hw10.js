var eratosthenes = function(n) {
    // Алгоритм Эрастофена, найти все простые числа до квадратного корня исходного
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Создать массив от 2 до (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Пометить все простые числа 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

console.log(eratosthenes(30)[eratosthenes(30).length - 1])
