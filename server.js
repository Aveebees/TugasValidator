const http = require('http');
http
.createServer((req, res) => {
    res.writeHead (2000, {'Content-Type' : 'text/html'});
    res.write('Hello World');
    res.end();;
})
.listen(3000, () => {
    console.log('Server berjalan pada port 3000..');
});