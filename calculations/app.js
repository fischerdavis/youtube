const Big = require('big.js');

console.log(1.03 + 1.04);

const correctAnswer = new Big(1.03).plus(1.04).toString();

console.log(correctAnswer);