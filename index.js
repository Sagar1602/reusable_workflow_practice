const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);

console.log('Practice app running!');
console.log(`Sum of [${numbers.join(', ')}] = ${sum}`);
