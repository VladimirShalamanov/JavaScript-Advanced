function solve(obj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let hatchback = { type: 'hatchback', color: undefined };
    let coupe = { type: 'coupe', color: undefined };

    if (obj['power'] <= 90) {
        delete obj['power'];
        obj['engine'] = smallEngine;
    }
    else if (obj['power'] <= 120) {
        delete obj['power'];
        obj['engine'] = normalEngine;
    }
    else if (obj['power'] <= 200) {
        delete obj['power'];
        obj['engine'] = monsterEngine;
    }

    let color = obj['color'];
    let carriage = obj['carriage'];

    if (carriage == 'hatchback') {
        delete obj['color'];
        delete obj['carriage'];
        obj['carriage'] = hatchback;
        obj['carriage']['color'] = color;
    }
    else if (carriage == 'coupe') {
        delete obj['color'];
        delete obj['carriage'];
        obj['carriage'] = coupe;
        obj['carriage']['color'] = color;
    }

    let wheelsize = obj['wheelsize'];
    if (wheelsize % 2 == 0) {
        wheelsize--;
    }
    delete obj['wheelsize'];
    obj['wheels'] = [wheelsize, wheelsize, wheelsize, wheelsize];

    return obj;
}

console.log(solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));