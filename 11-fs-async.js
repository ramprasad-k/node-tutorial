const {readFile, writeFile} = require('fs')
console.log('starting the task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-sync.txt',`Here is the callback result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with the Task');
            console.log(result);
        })
    })    
})

console.log('staring the next task');