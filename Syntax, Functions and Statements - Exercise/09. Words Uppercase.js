function solve(str) {
    let words = str.match(/\w+/g).join(", ").toUpperCase();
    console.log(words);
}

solve('Hi, how are you?');