// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('------while loop-----');

let a = 10;
while (a < 20) {
    console.log(a);
    a++;
};

console.log('------do-while loop-----');

let b = 20;
do{
    console.log(b);
    b++;
}while(b<20);

const arr = [3, 5, 8, 2, 1, 6];

for(let a of arr){
    console.log(a);
}