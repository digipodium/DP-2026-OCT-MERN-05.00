const nums = [2, 3, 4, 5, 6, 7, 8];

const evenNums = nums.filter((n) => {
    return n % 2 == 0;
});

console.log(evenNums);

const prices = [3400, 1000, 5600, 780, 230, 540];

const budgetPrice = prices.filter((p) => {
    return p >= 500 && p <= 2000;
})

console.log(budgetPrice);

console.log(4500 * 1.18);

const nums2 = nums.map((n) => {
    return n * 2;
});

console.log(nums2);

const gstPrices = prices.map(p => {
    return p * 1.18;
});

console.log(gstPrices);
