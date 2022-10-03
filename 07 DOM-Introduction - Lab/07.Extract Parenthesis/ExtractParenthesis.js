function extract(content) {
    let para = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;
    let res = [];

    let match = pattern.exec(para);
    while (match) {
        res.push(match[1]);
        match = pattern.exec(para);
    }

    return res.join('; ');
}