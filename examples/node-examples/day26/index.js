let http = require('http');
let fs = require('fs');
let url = require('url');
let PORT_NO = 9090;
function fetchUser(id) {
    let read = fs.readFileSync('users.json');
    let jsonString = read.toString();
    let jsItems = JSON.parse(jsonString);
    for(let i = 0; i < jsItems.length; i++) {
        if(id == jsItems[i].id ) {
            return jsItems[i];
        }
    }
    return undefined;
}
let server = http.createServer( (request, response) => {
    if(request.url != '/favicon.ico') {
        let obj = url.parse(request.url, true);
        let id = parseInt(obj.query.id);
        let data = fetchUser(id);
        if(data != undefined) {
            response.write(`Data Found, Name = ${data.name}, 
            Phone = ${data.phone}`)
        } else {
            response.write(`Sorry ${id} not found`);
        }
        response.end();
    }
});
server.listen(PORT_NO, () => console.log(`Server running at ${PORT_NO}`));