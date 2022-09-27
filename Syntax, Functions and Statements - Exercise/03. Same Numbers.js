function solve(nums) {
    let str = String(nums);
    let first = str[0];
    let res = true;
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);

        if (first !== str[i]) {
            res = false;
        }
    }
    console.log(res);
    console.log(sum);
}

solve(2222222);