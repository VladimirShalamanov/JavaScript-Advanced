function solve(arr) {
    let res = {};

    for (let el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (res.hasOwnProperty(product)) {
            let currPrice = res[product]["price"];
            if (currPrice > price) {
                res[product] = { town, price };
            }
        }
        else {
            res[product] = { town, price };
        }
    }

    for (let [product, value] of Object.entries(res)) {
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}

solve(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
);