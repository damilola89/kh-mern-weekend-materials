let fs = require("fs");
let streams = fs.readFileSync('D:/test.txt');
console.log(streams);
let stringData = streams.toString();
console.log(stringData);