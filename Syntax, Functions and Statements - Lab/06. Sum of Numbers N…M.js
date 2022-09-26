function solve(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let res = 0;

    for (let i = num1; i <= num2; i++) {
        res += i;
    }
    return res;
}
console.log(solve('1', '5'));