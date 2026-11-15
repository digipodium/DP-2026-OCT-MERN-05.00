function addNums(a, b) {
    var c = a + b;
    console.log(c);
};

addNums(345, 83);
// console.log(c);

const avgNums = function (a, b, c) {
    const avg = (a + b + c) / 3;
    // console.log(avg);
    return avg;
}

let result = avgNums(45, 78, 98);
console.log(result);

// arrow function

const fact = (n) => {
    let f = 1;
    for(let i=1;i<=n;i++){
        f = f * i;
    }
    return f;
};

let val = fact(6);
console.log(val);