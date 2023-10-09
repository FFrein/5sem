const http = require('http');

const PORT = process.env.PORT || 5000;
const Student = 'PNA';

const server = http.createServer((req, res) => {
    if(req.url ==='/api/name'){
        try{
        res.setHeader('Content-Type', 'text/plain');
        res.end('result: ' + Student, 'utf-8');
        }
        catch(err){

        }
    }
    else{
        res.end(req.url);
    }
})

server.listen(PORT, () => {console.log('Server start of port: ', PORT)})