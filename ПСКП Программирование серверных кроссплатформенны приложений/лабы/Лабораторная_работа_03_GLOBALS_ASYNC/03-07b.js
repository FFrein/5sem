//Exercise 7    

function f1(){
    console.log('f1');
}
        
function f2(){
     console.log('f2');
}
        
function f3(){
    console.log('f3');
}
        
function main(){
    console.log('main');
    //mac    
    setTimeout(f1, 50);
    setTimeout(f3, 50);
    //mic
    new Promise((resolve, reject) => 
        resolve('right after f1 and f3')
    ).then(resolve => console.log(resolve));
        
    new Promise((resolve, reject) => 
        resolve('Promise after Promise')
    ).then(resolve => console.log(resolve));
        
    f2();
}
        
main();