function solve(arr) {

    for (let row = 0; row < arr.length - 1; row++) {
        let row1 = arr[row].reduce((a, b) => a + b, 0);
        let row2 = arr[row + 1].reduce((a, b) => a + b, 0);
        let col1 = 0;
        let col2 = 0;

        for (let col = 0; col < arr.length; col++) {
            col1 += arr[row][col];
            col2 += arr[row + 1][col];
        }

        if (row1 !== row2 || col1 !== col2) {
            return false;
        }
    }

    return true;
}

console.log(solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));