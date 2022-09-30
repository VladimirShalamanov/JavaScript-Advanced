function solve(arr) {

    arr.sort();

    let letter;
    for (let products of arr) {
        let [name, price] = products.split(' : ');
        let lett = name[0];

        if (letter != lett) {
            letter = lett;
            console.log(letter);
        }
        console.log(`  ${name}: ${price}`);
    }
}

solve(
    ['Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10']

)