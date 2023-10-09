//Exercise 1
function firstJob(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Hello world');
        }, 2000);
    });
}

firstJob()
.then((result)=>{
    console.log("Block Then: " + result);
})
.catch((error)=>{
    console.error("Block catch: " + error);
})

async function firstJob2(){
    try{
        var result = await firstJob();
        console.log("Block try: " + result);
    }
    catch(err){
        console.error("Block catch2: " + err);
    }
}

firstJob2();