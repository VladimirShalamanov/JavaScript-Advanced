function solve(json) {
    let parsed = JSON.parse(json);

    let colNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));

    let res = '<table>\n';

    appendHeaders(colNames);
    appendValues(values);

    res += '</table>';

    function appendHeaders(colNames) {
        res += `    <tr>`;

        for (let colName of colNames) {
            res += `<th>${colName}</th>`;
        }

        res += `</tr>\n`;
    }

    function appendValues(values) {
        for (let value of values) {
            res += `    <tr>`;

            for (let v of value) {
                res += `<td>${escape(v)}</td>`;
            }

            res += `</tr>\n`;
        }
    }

    function escape(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        // .toString()
        // .replace('<', '&lt;')
        // .replace('>', '&gt;')
        // .replace('&', '&amp;')
        // .replace('\"', '&quot;')
        // .replace('\'', '&#39;');
    }

    console.log(res);
}

solve(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);