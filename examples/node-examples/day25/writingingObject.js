let fs = require("fs");
// this is an object which can't be directly written to file
let employee = {id:100, name: "Vijay", salary:30000};
fs.writeFileSync("employee.json", JSON.stringify(employee));
console.log("___DONE____");
let byteData = fs.readFileSync("employee.json");
let jsonData = byteData.toString();
console.log(byteData);
console.log(jsonData);
// convert to Javascript object so that you can access their properties
let obj = JSON.parse(jsonData);
console.log(obj.id);
