function solve(x1, y1, x2, y2) {
    let output1 = '';
    let output2 = '';
    let output3 = '';

    if (Number.isInteger(res(x1, y1))) {
        output1 = `{${x1}, ${y1}} to {0, 0} is valid`;
    }
    else {
        output1 = `{${x1}, ${y1}} to {0, 0} is invalid`;
    }
    if (Number.isInteger(res(x2, y2))) {
        output2 = `{${x2}, ${y2}} to {0, 0} is valid`;
    }
    else {
        output2 = `{${x2}, ${y2}} to {0, 0} is invalid`;
    }
    if (Number.isInteger(res((x1-x2), (y1-y2)))) {
        output3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    }
    else {
        output3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
    console.log(output1);
    console.log(output2);
    console.log(output3);

    function res(x, y) {
        return Math.sqrt((x ** 2) + (y ** 2));
    }
}

solve(2, 1, 1, 1);