const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer( (req, res) => {
    if (req.url === '/html') {
        try {
            fs.readFile('index.html', 'utf8',function(err,html){
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(html);
            });
            
        } catch (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }
    else{
        res.end(req.url);
    }
});

//для заупска сервера(что бы он слушал входящие соединения)
server.listen(PORT, () => console.log('Server started on PORT ' + PORT));