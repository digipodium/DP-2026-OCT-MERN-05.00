const user = {
    name: 'ramu',
    email: 'ramu@mail.com',
    password: 'abc123',
    'roll-no': 'a1214'
};

console.log(user);

console.log(user.name);
console.log(user['email']);
console.log(user["roll-no"]);

console.log(user.address);

user.address = 'Lucknow';

console.log(user.address);

user.address = 'Delhi';

console.log(user.address);

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.keys(user)[Object.values(user).indexOf('Delhi')]);

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy s24',
    price: 120000,
    colors: ['white', 'gray', 'black']
};

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors[0] = 'red';

console.log(smartphone.colors[0][0])

console.log(smartphone.colors);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'Galaxy s24',
        price: 120000,
        colors: ['white', 'gray', 'black']
    },
    {
        brand: 'Samsung',
        model: 'Galaxy s26',
        price: 130000,
        colors: ['white', 'gray', 'black']
    },
    {
        brand: 'Apple',
        model: 'Iphone 18',
        price: 135000,
        colors: ['Burgundy', 'Silver']
    },
    {
        brand: 'Nothing',
        model: '4a',
        price: 45000,
        colors: ['white', 'blue']
    },
    {
        brand: 'Oneplus',
        model: 'Nord',
        price: 23000,
        colors: ['gold', 'white']
    },
    {
        brand: 'Xiaomi',
        model: '17 Ultra',
        price: 35000,
        colors: ['black', 'silver']
    },
];

console.log(smartphoneList.length);
smartphoneList[1].price = 150000
console.log(smartphoneList[1].price);

console.log(smartphoneList.at(-1).colors[1]);
smartphoneList.at(-2).colors.push('red');

console.log(smartphoneList.at(-2));


const brands = smartphoneList.map(phone => phone.brand);

console.log(brands);

const budgetPrice = smartphoneList.filter(phone => phone.price < 50000);

console.log(budgetPrice);

const search = 'samsung';

const searchResult = smartphoneList.filter(phone => phone.brand.toLowerCase() === search.toLowerCase());
console.log(searchResult);