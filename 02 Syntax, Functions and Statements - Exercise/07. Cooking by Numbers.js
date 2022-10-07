function solve(num, c1, c2, c3, c3, c5) {
    num = Number(num);
    let arr = [c1, c2, c3, c3, c5];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');