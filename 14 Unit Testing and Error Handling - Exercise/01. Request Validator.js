function solve(obj) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let pattern = /^[\w.]+$/g;
    let specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`]

    if (!validMethod.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!obj.uri !== '*' && !obj.uri.match(pattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }
    for (const c of obj.message) {
        if (specialChar.includes(c)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj;
}