function solve(arr) {
    let garage = new Map();

    for (const a of arr) {
        [brand, model, quantity] = a.split(' | ');
        quantity = Number(quantity);

        if (!garage.has(brand)) {
            garage.set(brand, new Map());
        }

        let models = garage.get(brand);
        if (!models.has(model)) {
            models.set(model, 0);
        }

        models.set(model, models.get(model) + quantity);
    }

    for (const brand of garage.keys()) {
        console.log(brand);
        let models = garage.get(brand);
        for (const model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
}

solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
);