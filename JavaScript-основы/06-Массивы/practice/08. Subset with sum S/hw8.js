const arr = [17, 2, 8, 34, 4, 0.5, 42, 6, 3, 7, 15, 14, 9]
const sum = 20

let result = null

function subset_sum(numbers, target, partial) {
    let s, n, remaining

    partial = partial || []
    s = partial.reduce( (a, b) => a + b, 0)

    if (s > target || partial.length > 4) return null
    
    // check if the partial sum is equals to target
    if (s === target && partial.length == 4) {
        if(!result) result = []
        result.push(partial)
        // console.log("%s=%s", partial.join("+"), target)
    }

    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i]
        remaining = numbers.slice(i + 1)
        subset_sum(remaining, target, partial.concat([n]))
    }

    return result
}

// lets calculate time
const startTime = process.hrtime()
const res = subset_sum(arr, sum)
const diff = process.hrtime(startTime)

console.log(`Result:`, res)
console.log(`Time: ${ (diff[0] * 1e9 + diff[1]) / 1000000} ms`)