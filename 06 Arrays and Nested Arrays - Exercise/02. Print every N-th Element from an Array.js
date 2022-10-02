function solve(arr, n) {
    let sum = [];
    for (let i = 0; i < arr.length; i += n) {
        sum.push(arr[i]);
    }

    return sum;
}

console.log(solve([
    'dsa',
    'asd',
    'test',
    'tset'],
    2
));