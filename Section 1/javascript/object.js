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

console.log( smartphone.price );
console.log( smartphone.colors[1] );

smartphone.colors[0] = 'red';

console.log(smartphone.colors[0][0])

console.log(smartphone.colors);
