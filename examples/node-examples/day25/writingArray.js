let fs = require('fs');
let employees = [
    {id: 100, name: "Raj", salary:35000},
    {id: 200, name: "Vijay", salary:435000},
    {id: 300, name: "Mohan", salary:55000}
]
// convert the entire array to json string so that you can store in the file
let employeesJSON = JSON.stringify(employees);
// write the employeesJSON to the JSON file
fs.writeFileSync("employee.json", employeesJSON);
console.log("_____DONE_____");
