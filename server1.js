const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    let url = req.url === '/' ? '/home' : req.url; 
    console.log(url);

    if (url === '/home' || url === '/about' || url === '/contact') {
        const filePath = `.${url}.html`; 
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write("Halaman tidak ditemukan...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("Halaman tidak ditemukan...");
        res.end();
    }
}).listen(3000, () => {
    console.log('Server berjalan pada port 3000...');
});
