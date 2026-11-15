const arr = [4567, true, 'hello', console.log];

console.log(arr);

// console.log( typeof arr );
console.log(Array.isArray(arr));

const movies = ['Harry Potter', 'Spiderman', 'Superman', 'Doremon', 'Avengers'];

console.log(movies.length);

// indexing
console.log(movies[3]);
console.log(movies.indexOf('Spiderman'));

console.log(movies[-2]);
console.log(movies[23]);
console.log(movies.at(-2));

movies[2] = 'Batman';
console.log(movies);

// Slicing
console.log(movies.slice(1, 4));
console.log(movies.slice(1, 23));
console.log(movies.slice(1));

// adding and removing elements
movies.push('Clayface'); // adds element at the end of array
movies.unshift('Supergirl'); // adds element at the start of array
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// movies.splice(2, 2);  // remove elements from any position
// console.log(movies);

// movies.splice(2, 2, 'Doomsday', 'Ramayana');

movies.splice(2, 0, 'Doomsday', 'Ramayana');
console.log(movies);