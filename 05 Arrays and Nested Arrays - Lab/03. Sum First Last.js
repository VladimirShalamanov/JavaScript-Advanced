function solve(arr){
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    return first + last;
}

console.log(solve(['20', '30', '40']));