function solve(arr, n) {
    for (let i = 0; i < n % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
);