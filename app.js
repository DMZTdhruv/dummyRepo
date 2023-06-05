const loadash = require('lodash');

const items = [1, [2 , [3 , [4]]]];
const newItems = loadash.flatMapDeep(items);
console.log(newItems);
console.log('Hello, world');