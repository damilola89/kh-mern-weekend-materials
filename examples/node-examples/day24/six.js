let read = require("readline-sync");
// use question for console to expect your input
let name = read.question('Enter name: ');
let age = read.questionInt('Enter age: ');
let amount = read.questionFloat('Enter amount: ');
let password = read.questionNewPassword('Enter password: ');
console.log(`Name = ${name}, age = ${age}, amount = ${amount}, password = ${password}`);