function solve(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr = arr.concat(nums[i]);
    }

    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));