/*global require, module,  __dirname, console */

// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('Mosh');

//  var logger = require('./logger');
//  logger.log('message');

//  var log = require('./logger');
//  log('message');

// const program = require('./progm');
// program.fib(10);

const program = require("./progm");

var result = program.isEven(80);
console.log("Even:" + result);
