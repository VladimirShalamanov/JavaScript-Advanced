function solve(arr) {
    let towns = {};

    for (let info of arr) {
        let [name, population] = info.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']

);