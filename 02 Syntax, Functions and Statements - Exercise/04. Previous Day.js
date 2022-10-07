function solve(y, m, d){
    let currD = new Date(y, m - 1, d - 1);
    console.log(`${currD.getFullYear()}-${currD.getMonth() + 1}-${currD.getDate()}`);
}

solve(2016, 10, 1);