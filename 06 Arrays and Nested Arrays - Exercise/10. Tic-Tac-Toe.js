function solve(arr) {
    let matrix =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let player = 'X';

    for (let a of arr) {
        [row, col] = a.split(' ').map(Number);

        if (matrix[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        matrix[row][col] = player;

        for (let i = 0; i < 3; i++) {
            if (
                matrix[i][0] === player &&
                matrix[i][1] === player &&
                matrix[i][2] === player
            ) {
                printWin();
                return;
            }
            else if (
                matrix[0][i] === player &&
                matrix[1][i] === player &&
                matrix[2][i] === player
            ) {
                printWin();
                return;
            }
        }

        if (
            matrix[0][0] === player &&
            matrix[1][1] === player &&
            matrix[2][2] === player
        ) {
            printWin();
            return;
        }
        else if (
            matrix[0][2] === player &&
            matrix[1][1] === player &&
            matrix[2][0] === player
        ) {
            printWin();
            return;
        }

        if (
            !matrix[0].includes(false) &&
            !matrix[1].includes(false) &&
            !matrix[2].includes(false)
        ) {
            printNobody();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function printWin() {
        console.log(`Player ${player} wins!`);
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join('\t'));
        }
    }
    function printNobody() {
        console.log('The game ended! Nobody wins :(');
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join('\t'));
        }
    }
}

solve(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]
);