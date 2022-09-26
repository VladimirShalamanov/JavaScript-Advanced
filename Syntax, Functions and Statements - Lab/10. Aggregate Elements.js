function solve(array){
    let numbers = array.map(Number);

    let sum = numbers.reduce((a, b) => a + b);
    const initialValue = 0;
    let inverse = numbers.reduce((a, b) => a + 1/b, initialValue);
    let concat = numbers.join('');

    console.log(sum);
    console.log(inverse);
    console.log(concat);
}

solve([2, 4, 8, 16])