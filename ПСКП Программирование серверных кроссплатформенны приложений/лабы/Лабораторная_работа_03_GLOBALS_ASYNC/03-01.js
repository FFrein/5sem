const http = require('http');
const readline = require('readline');

const PORT = process.env.PORT || 5000;

var state = 'norm';

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.end("<h1>" + state + "</h1>)");
}).listen(PORT);

//Здесь создается интерфейс для чтения из стандартного ввода и записи в стандартный вывод 
const rl = readline.createInterface({
    input: process.stdin,
});

rl.prompt(); // начинает ожидание ввода
//обработчик события 'line' для интерфейса rl. Событие 'line' срабатывает, когда пользователь вводит строку и нажимает Enter.
rl.on('line', (input)=> {
    switch(input){
        case 'norm':
            console.log(state + ' --> norm');
            state = 'norm';
            break;
        case 'stop':
            console.log(state + ' --> stop');
            
            state = 'stop';
            break;
        case 'idle':
            console.log(state + ' --> idle');
            state = 'idle';
            break;
        case 'test':
            console.log(state + ' --> test');
            state = 'test';
            break;
        case 'exit':
            server.close();
            rl.close();
            break;
        default:
            console.log("default: " + input);    
    }
    rl.prompt();//снова ожидание ввода
})