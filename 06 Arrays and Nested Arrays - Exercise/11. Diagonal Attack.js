function solve(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let colLoop = arr.length - 1;

    for (let row = 0; row < arr.length; row++) {
        let arrCol = arr[row].split(' ').map(Number);

        for (let col = 0; col < arrCol.length; col++) {
            if (row === col) {
                firstDiagonal += arrCol[col];
                secondDiagonal += arrCol[colLoop--];
            }
        }
    }

    if (firstDiagonal === secondDiagonal) {
        colLoop = arr.length - 1;
        for (let row = 0; row < arr.length; row++) {
            let arrCol = arr[row].split(' ').map(Number);

            for (let col = 0; col < arrCol.length; col++) {
                if (row !== col && col !== colLoop) {
                    arrCol[col] = firstDiagonal;
                }
            }
            colLoop--;
            arr[row] = arrCol;
        }
        for (let row = 0; row < arr.length; row++) {
            console.log(arr[row].join(' '));
        }
        return;
    }
    for (let row = 0; row < arr.length; row++) {
        console.log(arr[row]);
    }
    return;
}

solve(
    ['1 1 1',
        '1 1 1',
        '1 1 0']
);