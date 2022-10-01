function solve(arr){
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    let res = arr.slice(middle);

    return res;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));