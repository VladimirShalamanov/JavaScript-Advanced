function solve(str1, str2, str3){
let len1 = str1.length;
let len2 = str2.length;
let len3 = str3.length;

let sumL = len1 + len2 + len3;
let averageLength = Math.floor(sumL / 3);

console.log(sumL);
console.log(averageLength)
}

solve('chocolate', 'ice cream', 'cake');