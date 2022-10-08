function solve(arr) {
    let data = [];

    let run = modify();

    for (const a of arr) {
        let [cmd, name, key, value] = a.split(' ');

        if (key == 'inherit') {
            cmd += key;
            key = value;
        }

        run[cmd](name, key, value);
    }

    function modify(){
        let res = {
            create: (name) => data[name] = {},
            createinherit: (name, parent) => data[name] = Object.create(data[parent]),
            set: (name, key, value) => data[name][key] = value,
            print: (name) => {
                let output = [];

                for (const prop in data[name]) {
                    output.push(`${prop}:${data[name][prop]}`)
                }
                console.log(output.join(','));
            }
        }

        return res;
    }
}

solve(
    ['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2']
);