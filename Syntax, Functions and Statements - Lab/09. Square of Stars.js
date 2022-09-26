function solve(num) {
    const star = '* ';
    if (num === null || num === '' || num === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(star.repeat(5).trim());
        }
    }
    else {
        for (let i = 0; i < num; i++) {
            console.log(star.repeat(num).trim());
        }
    }
}

solve(4);