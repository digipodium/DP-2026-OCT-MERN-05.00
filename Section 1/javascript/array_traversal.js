const nums = [3, 6, 9, 2, 1, 5, 7];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
};

console.log('------------for of loop--------------');

for (let n of nums) {
    console.log(n);
}

console.log('-----------for each function------------');


nums.forEach((n, i) => {
    console.log(n, i);
});

// program print all even numbers

nums.forEach((n) => {
    if (n % 2 == 0) {
        console.log(n);
    }
})

nums.forEach((n) => {
    console.log(n*n);
})