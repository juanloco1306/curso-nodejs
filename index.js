const http = require('http');

/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}).listen(3000);*/


// Tambien se puede escribir asi
/*const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

http.createServer(handleServer).listen(3000);
*/

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000');
});
