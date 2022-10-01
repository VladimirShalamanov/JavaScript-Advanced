function solve(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    
    for (let i = 0; i < matrix.length; i++){
        firstSum += matrix[i][i];
        secondSum += matrix[i][matrix.length - 1 - i];
    }

    console.log(firstSum, secondSum);
}

solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])