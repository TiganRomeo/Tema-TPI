const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Hello from my web server</h1></body></html>');
        res.end();
    } 
    
    else if (req.url === '/spring') {
    
        fs.readFile('./templates/spring.html', null, function (error, data) {
            if (error) {
                res.writeHead(400);
                res.write('404');
            } else {
                res.write(data)
            }
        });
    }

    else if (req.url === '/winter') {
    
        fs.readFile('./templates/winter.html', null, function (error, data) {
            if (error) {
                res.writeHead(400);
                res.write('404');
            } else {
                res.write(data)
            }
        });
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
