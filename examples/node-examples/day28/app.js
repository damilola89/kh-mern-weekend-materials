let express = require('express');
let parser = require('body-parser');
let app = express();
let PORT_NO = 9090;

app.listen(PORT_NO, () => console.log(`Server started in ${PORT_NO}`));
app.use(parser.json());

// temporary array to keep the details
let users = [];

app.post('/users', (request, response) => {
    let data = request.body;
    users.push(data);
    response.json(data);
});
app.get('/users', (request, response) => {
    response.json(users);
});
app.get('/users/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let temp = undefined;
    for(let i of users) {
        if(i.userid == id) {
            temp = i;
            break;
        }
    }
    if(temp != undefined) {
        response.status(200).json(temp);
    } else {
        response.status(404).json({"message": `Sorry ${id} not found`});
    }
    
});
