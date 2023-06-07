const loadash = require('lodash');

const items = [1, [2 , [3 , [4]]]];
const newItems = loadash.flatMapDeep(items);
console.log(newItems);
console.log('Lol let me restart the app');

//"scripts" 
// "dev" : to run the app as npm run dev
// "start" : nodemon app.js if you want to run it without approaching npm run dev!