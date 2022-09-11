let read = require("readline-sync");
let fs = require("fs");

let input = read.question("Enter some content to store in file: ");
fs.writeFileSync("abc.txt", input+"\n", {flag: "a+"});
console.log('_____Done_____');