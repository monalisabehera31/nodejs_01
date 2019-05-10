/*global require, module,  __dirname, console */

// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('Mosh');

//  var logger = require('./logger');
//  logger.log('message');

//  var log = require('./logger');
//  log('message');

const program = require('./progm');
program.fib(10);

// const program = require("./progm");

var result = program.isEven(80);
console.log("Even:" + result);
var output = program.AddTwoNumbers2(10, 23);
console.log("addition:" + output);

var op2 = program.isPrime(34);
console.log(op2);

var fact = program.isFactorial(4);
console.log("factorail: " + fact);