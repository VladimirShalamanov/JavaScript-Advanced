function solve(a, b){
    while (b){
        let t = b;
        b = a % b;
        a = t;
    }
    console.log(a)
}

solve(2154, 458);