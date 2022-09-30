function solve(arr) {
    let res = [];
    const regex = new RegExp(/\s*\|\s*/);

    for (const a of arr.splice(1)) {
        let [town, latitude, longitude] = a.split(regex).filter(Boolean);
        res.push({
            Town: town,
            Latitude: +Number(latitude).toFixed(2),
            Longitude: +Number(longitude).toFixed(2)
        });
    }

    return JSON.stringify(res);
}

console.log(solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
));