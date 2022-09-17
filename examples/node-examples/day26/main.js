let http = require("http");
let PORT_NO = 9090;
// creating server instance
let server = http.createServer( (request, response) => {
    let name = 'Vignesh';
    let id = 9900; 
    response.writeHead(200, {'context-type': 'text/html'});
    response.write(`<html><body>`)
    response.write("<h2>Hey node web</h2>");
    response.write(`<table border = '1'>
    <tr><th>ID</th><th>NAME</th></tr>
    <tr><td>1123</td><td>Rajesh</td></tr>
    <tr><td>${id}</td><td>${name}</td></tr>
    </table>`);
    response.write(`</body></html>`);
    response.end();
});
// start the server in some port
server.listen(PORT_NO, () => {console.log(`Server started at port ${PORT_NO}`)});
// you can use http://localhost:9090 to send request