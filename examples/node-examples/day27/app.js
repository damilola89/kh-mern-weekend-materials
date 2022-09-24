let express = require('express');
let app = express();
let PORT_NO = 9090;
app.listen(PORT_NO, () => console.log(`Express is running in ${PORT_NO}`));

app.post('/save/:id/:name', (request, response) => {
    // request.params = {id: value, name: value}
    // if id is not a number or -ve respond with status code 404 with an error message
    let emp = {empId: request.params.id, empName: request.params.name};
    response.status(200).json(emp);
});