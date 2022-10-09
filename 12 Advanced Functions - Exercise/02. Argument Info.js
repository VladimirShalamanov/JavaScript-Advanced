function solve() {

    let data = {};

    for (const a of arguments) {
        console.log(`${typeof(a)}: ${a}`);

        if (!data[typeof (a)]) {
            data[typeof (a)] = 1;
        }
        else {
            data[typeof (a)]++;
        }
    }

    Object.keys(data).sort((a, b) => data[b] - data[a]).forEach(x => console.log(`${x} = ${data[x]}`));
}

solve(
    'cat', 42, function () { console.log('Hello world!'); }
);