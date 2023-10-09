const http = require('http');
const url = require('url');
const fs = require('fs');

var fact = (n) => {
    let rslt = 1;
    for(let i = n; i > 0; i--){
        rslt *= i;
    } 
    return rslt;
}

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    let rc = JSON.stringify({k:0});
    let path = url.parse(req.url).pathname;

    if(path === '/fact'){
        let param = url.parse(req.url, true).query.k;
        if(typeof param != 'undefined'){
            let k = parseInt(param);

            if(Number.isInteger(k)){
                res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'})
                res.end(JSON.stringify({k:k, fact: fact(k)}))
            }
        }
    }
    if(path ==='/'){
        let html = fs.readFile('index.html', (err, html) =>{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(html);
        })
    }
}).listen(PORT);



