function solve(n, k) {
    let start = [1];

    for (let i = 1; i < n; i++) {

        start[i] = sum(start, k);
        function sum(start, k) {
            let loop = start.length > k ? k : start.length;
            let sum = 0;
            for (let i = 1; i <= loop; i++) {
                sum += start[start.length - i];
            }
            return sum;
        }
    }
    return start;
}

console.log(solve(8, 2));