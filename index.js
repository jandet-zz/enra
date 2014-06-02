var connect = require('connect'),
    serveStatic = require('serve-static'),
    http = require('http');

var app = connect().use(serveStatic(__dirname + '/public'));

http.createServer(app).listen(8080);