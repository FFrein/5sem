const http = require('http');
const data = require('./DB.js')
const fs = require('fs');
const url = require('url');

let db = new data.DB();

//слушатели событий

db.on('GET', (req, res)=>{
    console.log('DB.GEt');
    res.end(JSON.stringify(db.get()));
})

const server = http.createServer((req, res)=>{
    if(url.parse(req.url).pathname === '/'){
        let html = fs.readFile('', ()=>{
            res.writeHead(200, '');
            res.end(html);
        })
    }
    else if (url.parse(req.url).pathname ==='/api/db'){
        db.emit(req.method, req, res); //для генерации событий ; имя события - стркока
    }
}).listen(PORT);