const http = require('http');
http
.createServer((req,res)=> {
    res.writeHead (200, {'Content-Type' : 'text/html',});
    const url = req.url;
    console.log(url);
    if(url === '/about'){
        res.write('<h3>Ini merupakan halaman about<h3>');
        res.end();
    }
    else if (url === '/contact'){
        res.write('<h3>Ini merupakan halaman contact</h3>');
        res.end();
    }
    else {
        res.write('Hello World');
        res.end();
    }
})
.listen(3000, () => {
    console.log('Server berjalan pada port 3000...');
});