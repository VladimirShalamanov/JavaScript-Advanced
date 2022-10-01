function solve(arr) {
    let res = [];

    for (let num of arr) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    for (let num of res){
        console.log(num);
    }
}

solve([7, -2, 8, 9]);