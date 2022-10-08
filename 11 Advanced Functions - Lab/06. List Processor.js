function solve(input) {
    let arr = [];

    let obj = {
        add: s => arr.push(s),
        remove: s => (arr = arr.filter(x => x !== s)),
        print: () => console.log(arr.join(',')),
    }

    input.forEach(x => {
        const [cmd, v] = x.split(' ')

        obj[cmd](v)
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);