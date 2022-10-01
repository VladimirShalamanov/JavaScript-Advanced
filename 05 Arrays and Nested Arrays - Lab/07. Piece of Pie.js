function solve(pies, startF, endF) {
    let start = pies.indexOf(startF);
    let end = pies.indexOf(endF) + 1;

    return pies.slice(start, end);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));