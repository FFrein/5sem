const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const fname = './pic.PNG';

const server = http.createServer((req, res) => {
    if (req.url === '/png') {
        try {
            const stat = fs.stat(fname, (err, stat)=>{

                res.writeHead(200, {
                    'Content-Type': 'image/png', 
                    'Content-Length': stat.size
                });
    
                const stream = fs.createReadStream(fname);
                stream.pipe(res);
            });

        } catch (error) {
            res.statusCode = 500;
            res.end('Internal Server Error. Error: ' + error);
        }
    } else {
        res.end(req.url);
    }
});

server.listen(PORT, () => console.log('Server started on PORT ' + PORT));