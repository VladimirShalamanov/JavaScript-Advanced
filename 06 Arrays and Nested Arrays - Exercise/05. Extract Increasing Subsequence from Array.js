function solve(arr) {
    let n = 0;
    let newArr = arr.reduce((acc, curr) => {
        if (curr >= n) {
            n = curr;
            acc.push(curr);
        }
        return acc;
    }, [])

    return newArr;
}

console.log(solve(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
));