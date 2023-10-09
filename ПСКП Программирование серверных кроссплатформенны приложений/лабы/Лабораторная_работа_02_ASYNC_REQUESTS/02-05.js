const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/fetch') {
        fs.readFile('fetch.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url === '/api/name') {
        // Эмулируем асинхронный запрос и отправляем фамилию, имя и отчество
        const responseData = {
            lastName: 'Pesetsky',
            firstName: 'Nikita',
            middleName: 'Andreevich',
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(responseData));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
