function solve(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    let loops = arr.length;
    for (let i = 0; i < loops; i++) {
        if (i % 2 == 0) {
            newArr.push(arr.shift());
        }
        else {
            newArr.push(arr.pop());
        }
    }

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));