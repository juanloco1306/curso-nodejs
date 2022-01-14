/*const http = require('http');

const colors = require('colors');
*/

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

/*const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.rainbow);
});*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function (req, res) {
    res.send('<h1>Hola Mundo con Express y Node</h1>');
    res.end();
});

server.listen(3000, function () {
    console.log('Server on port 3000'.zebra);
});
