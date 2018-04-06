// Object destructuring

// const person = {
//     name: 'Szymon',
//     age: 32,
//     location: {
//         city: 'Katowice',
//         temp: 2
//     }
// };
// const { name: firstName = 'Anonymous', age: wiek } = person;
// const { city: miasto, temp } = person.location;
// console.log(`${firstName} is ${wiek} years old and lives in ${miasto}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ['Piotrowicka 47/10', 'Katowice', 'Poland', 'PL-40723']
// const [street, city, state = 'UE', zip] = address;
// console.log(`You are in ${street}, ${city} (${state}).`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , priceMedium] = item;

console.log(`A medium ${itemName} costs ${priceMedium}.`)